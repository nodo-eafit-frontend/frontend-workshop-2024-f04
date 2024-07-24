const getBoardSize = (size) => `game-page--${size}x${size}`;

function findChildIndex(parent, child) {
	const childrenArray = Array.from(parent.children); // Convert HTMLCollection to an array
	const index = childrenArray.findIndex((element) => element === child); // Use findIndex to find the index of the child

	return index;
}

const getCoordenates = (index, side) => {
	const coordenateCol = index % side;
	const coordenateRow = Math.floor(index / side);

	return [coordenateCol, coordenateRow];
};

function getIndexFromCoordinates(col, row, side) {
	const isColValid = col >= 0 && col < side;
	const isRowValid = row >= 0 && row < side;

	if (isColValid && isRowValid) {
		return row * side + col;
	}

	return undefined; // Coordenadas inválidas
}

const getAreNeighbors = (index, emptyIndex, boardSize) => {
	const [emptyCol, emptyRow] = getCoordenates(emptyIndex, boardSize);
	const [chipCol, chipRow] = getCoordenates(index, boardSize);

	// Calculate the differences in rows and columns
	const rowDiff = Math.abs(emptyRow - chipRow);
	const colDiff = Math.abs(emptyCol - chipCol);

	// Check if they are horizontal or vertical neighbors
	return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
};

const makeMove = (boardNode, chipNode, emptyNode, boardSize) => {
	const index = findChildIndex(boardNode, chipNode);
	const emptyIndex = findChildIndex(boardNode, emptyNode, boardSize);
	const areNeighbors = getAreNeighbors(index, emptyIndex, boardSize);

	if (areNeighbors) swapPieces(boardNode, index, emptyIndex);

	return areNeighbors;
};

export const getSignBoardGame = (parentNode) => {
	const childrenArray = Array.from(parentNode.children); // Convert HTMLCollection to an array
	const chips = childrenArray.map((chip) => chip.dataset.number);

	return chips.join();
};

/**
 * Sanitizes the input data by converting the boardSize to a number and
 * converting withImage and withTime to boolean values.
 *
 * @param {Object} params - The input parameters.
 * @param {string} params.nickname - The nickname of the player as a string.
 * @param {string} params.boardSize - The size of the board as a string.
 * @param {string} params.difficulty - The level of the game as a string.
 * @param {string} params.withImage - A string that represents a boolean value for using an image.
 * @param {string} params.withTime - A string that represents a boolean value for using a timer.
 * @returns {Object} The sanitized data.
 * @property {string} params.nickname - The nickname of the player as a string.
 * @property {number} data.boardSize - The size of the board as a number.
 * @property {('easy'|'moderate'|'hard'|'legendary')} params.difficulty - String indicating the level.
 * @property {boolean} data.withImage - Boolean indicating if an image is used.
 * @property {boolean} data.withTime - Boolean indicating if a timer is used.
 */
export const sanitizeData = (params) => {
	const validDifficulties = ['easy', 'moderate', 'hard', 'legendary'];
	const difficulty = validDifficulties.includes(params.difficulty) ? params.difficulty : 'easy';

	const data = {
		...params,
		boardSize: Number(params.boardSize),
		difficulty: difficulty,
		withImage: params.withImage === 'true',
		withTime: params.withTime === 'true',
	};

	return data;
};

const createChip = (index, withImage, boardSize = 3) => {
	const number = index + 1;
	const chipEl = document.createElement('div');

	chipEl.role = 'button';
	chipEl.className = 'game-page__chip';
	chipEl.dataset.number = number; // Agregar el 'data-number' atributo personalizado apra guardar información

	if (withImage) {
		const spanEl = document.createElement('span');
		const imgEl = document.createElement('img');

		spanEl.textContent = number;
		imgEl.src = `http://localhost:4000/images/${boardSize}x${boardSize}/${index}.webp`;
		imgEl.alt = `Chip ${number}`;

		chipEl.classList.add('game-page__chip--image');
		chipEl.append(spanEl, imgEl);
	} else {
		chipEl.classList.add('game-page__chip--number');
		chipEl.textContent = number;
	}

	return chipEl;
};

export const addPiecesBoard = (gameBoard, boardSize, withImage) => {
	const boardSizeClass = getBoardSize(boardSize);
	gameBoard.classList.add(boardSizeClass);
	const chipsLength = boardSize * boardSize;

	// -- Agregar las fichas
	Array(chipsLength - 1)
		.fill(undefined)
		.forEach((_, index) => {
			const chipEl = createChip(index, withImage, boardSize);
			gameBoard.append(chipEl);
		});

	// -- Agregar la ficha vacía
	const empty = document.createElement('div');
	empty.className = 'game-page__empty';
	empty.dataset.number = chipsLength; // Agregar el 'data-number' con el último número
	gameBoard.append(empty);

	return getSignBoardGame(gameBoard);
};

export const swapPieces = (parentNode, from, to) => {
	const child1 = parentNode.children[from];
	const child2 = parentNode.children[to];

	// Crear un nodo de referencia temporal
	const tempNode = document.createElement('div');

	// Reemplazar child1 con tempNode
	parentNode.replaceChild(tempNode, child1);

	// Reemplazar child2 con child1
	parentNode.replaceChild(child1, child2);

	// Reemplazar tempNode con child2
	parentNode.replaceChild(child2, tempNode);
};

const getRandomNeigbor = (boardNode, emptyNode, boardSize) => {
	const index = findChildIndex(boardNode, emptyNode, boardSize);
	const [col, row] = getCoordenates(index, boardSize);

	const index1 = getIndexFromCoordinates(col + 1, row, boardSize);
	const index2 = getIndexFromCoordinates(col, row + 1, boardSize);
	const index3 = getIndexFromCoordinates(col - 1, row, boardSize);
	const index4 = getIndexFromCoordinates(col, row - 1, boardSize);

	const neighbors = [index1, index2, index3, index4].filter((item) => !!item);

	return neighbors[Math.floor(Math.random() * neighbors.length)];
};

export const shuffleBoard = ({ boardNode, timesToShuffle, boardSize, emptyNode }) => {
	let count = 0;

	while (count < timesToShuffle) {
		const randomPosition = getRandomNeigbor(boardNode, emptyNode, boardSize);
		const emptyPosition = findChildIndex(boardNode, emptyNode, boardSize);

		if (randomPosition !== emptyPosition) {
			swapPieces(boardNode, randomPosition, emptyPosition);
			count++;
		}
	}
};

export const addEventToSwapByEmptyNeigbor = (props, callback) => {
	const { chips, emptyNode, boardSize } = props;

	chips.forEach((chip) => {
		chip.addEventListener('click', (event) => {
			const boardNode = event.target.parentNode;
			const chipNode = event.target;
			const done = makeMove(boardNode, chipNode, emptyNode, boardSize);

			if (done) callback();
		});
	});
};

/**
 * Validates if the game has been won by comparing the initial and current game states.
 *
 * @param {string} initSignGame - The initial signature of the game state. Ex. '1,2,3,4,5,6,7,8'
 * @param {string} currentSignGame - The current signature of the game state. Ex. '1,5,3,2,4,7,6,8'
 * @returns {[boolean, number]} - Returns an array where the first element is a boolean indicating if the game has been won, and the second element is the number of matched chips.
 */
export const validateWinGame = (initSignGame, currentSignGame) => {
	
	const initArray = initSignGame.split(',');
	const currentArray = currentSignGame.split(',');
	let matchedChips = 0;

	for (let i = 0; i < initArray.length; i++) {
		if (initArray[i] === currentArray[i]) {
			matchedChips++;
		}
	}

	return [initSignGame === currentSignGame, matchedChips];
};
