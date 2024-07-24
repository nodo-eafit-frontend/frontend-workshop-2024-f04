import {
	addEventToSwapByEmptyNeigbor,
	addPiecesBoard,
	calculateScore,
	getParamsObject,
	getSignBoardGame,
	openModal,
	sanitizeData,
	shuffleBoard,
	startTimer,
	stopTimer,
	validateWinGame,
} from '../../utils/index.js';
import { getGameInfo, saveStats } from '../../services/index.js';

(async () => {
	try {
		document.title = 'Sliding Puzzle | Game';

		const params = getParamsObject(window.location.search);
		const data = sanitizeData(params); // Convertir adecuadamente los datos
		const { boardSize, difficulty, nickname, withImage, withTime } = data; // destructurar datos

		// Datos que se recolectan en el transcurso del juego
		data.moves = 0;
		data.score = 0;
		data.time = {};

		// Petición que trae la info necesaria para crear el tablero
		const gameInfo = await getGameInfo();

		// Elementos del HTML que se trabajan directamente desde Javascript
		const playerName = document.querySelector('.game-page__avatar + span');
		const movesEl = document.querySelector('.game-page__moves'); // Cantidad de movimientos
		const timeEl = document.querySelector('time');
		const dificultyEl = document.querySelector('.game-page__dificulty');
		const scoreEl = document.querySelector('.game-page__score');
		const saveGoHomeBtn = document.querySelector('#you-won-modal button');
		const gameBoard = document.querySelector('.game-page__board');

		// Generar las fichas según boardsize y retornar la firma del juego inicial
		// - La firma es la representación en string del orden de la matriz del tablero pero en una lista: ej. '1,2,3,4,5,6,7,8'
		const initSignGame = addPiecesBoard(gameBoard, boardSize, withImage);

		// Lista de todas las fichas del tablero
		const chips = document.querySelectorAll('.game-page__chip');
		const emptyNode = document.querySelector('.game-page__empty'); // Lista de todas las fichas

		playerName.textContent = nickname; // Agregar nickname al html
		dificultyEl.textContent = gameInfo.difficultyInfo[difficulty].text;
		const shuffleProps = {
			boardNode: gameBoard,
			timesToShuffle: gameInfo.difficultyInfo[difficulty].timesToShuffle,
			boardSize,
			difficulty,
			emptyNode,
		};

		shuffleBoard(shuffleProps); // Revolver juego según dificultad

		// Agregar tiempo en segundos
		if (withTime) {
			startTimer(timeEl, (minutes, seconds) => {
				data.time = { minutes, seconds };
			});
		} else {
			timeEl.parentNode.remove();
		}

		const eventClickProps = { chips, emptyNode, boardSize };
		const onClick = () => {
			// Agregar movimientos
			data.moves += 1;
			movesEl.textContent = data.moves;

			// Agregar puntaje
			const calculateProps = {
				time: data.time,
				difficulty,
				gameInfo,
				moves: +movesEl.textContent,
			};

			const score = calculateScore(calculateProps); // Agregar puntaje
			data.score = score;
			scoreEl.textContent = data.score;

			// Validar para ganar
			const currentSignGame = getSignBoardGame(gameBoard);
			const [won, matchedChips] = validateWinGame(initSignGame, currentSignGame);

			// Validar fin del juego
			if (won) {
				if (withTime) stopTimer();
				openModal('you-won-modal');
			} 
		};

		// Agrega evento de click apra cada ficha del tablero
		addEventToSwapByEmptyNeigbor(eventClickProps, onClick); // Realizar eventos que intercambias vecinos del empty chip

		// Agrega evento de click al botón del modal para guardar las estadísticas
		saveGoHomeBtn.addEventListener('click', async (event) => {
			event.preventDefault(); // Prevent reoad the page due to the button is form part
			const buttonEl = event.target;
			const modalTime = 3000;

			buttonEl.classList.toggle('button--loading');

			const response = await saveStats(data); // Realizando petición...

			buttonEl.classList.toggle('button--loading');

			if (response.ok) {
				const callback = () => {
					window.location.href = '../../index.html';
				};

				openModal('success-modal', modalTime, callback);
			} else {
				openModal('error-modal', modalTime);
			}
		});
	} catch (error) {
		console.error(error);
		window.location.href = '../error/index.html';
	}
})();
