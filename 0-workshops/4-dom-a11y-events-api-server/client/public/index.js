import { openModal, closeModal } from './utils/index.js';

document.title = 'Sliding Puzzel | Home';

const newGameButtonEl = document.getElementById('new-game-button');
const newGameModalEl = document.getElementById('new-game-modal');
const closeModalButtonEl = newGameModalEl.querySelector('button[aria-label="close"]');
const newGameFormEl = document.getElementById('new-game-form');

newGameButtonEl.addEventListener('click', function () {
	openModal('new-game-modal');
});

closeModalButtonEl.addEventListener('click', function () {
	closeModal('new-game-modal');
});

newGameModalEl.addEventListener('close', function () {
	newGameFormEl.reset();
});

<form id="new-game-form" class="form" action="./pages/game/index.html">
<div class="form__group">
	<label for="nickname" class="form__label">Nickname</label>
	<input type="text" id="nickname" class="form__input" name="nickname" required />
</div>

<div class="form__group">
	<label class="form__label">Board Size</label>
	<fieldset class="form__fieldset">
		<legend class="form__legend">Select Board Size</legend>
		<div class="form__options">
			<input type="radio" id="board-size-3x3" name="board-size" value="3x3" required />
			<label for="board-size-3x3" class="form__option">3x3</label>

			<input type="radio" id="board-size-4x4" name="board-size" value="4x4" />
			<label for="board-size-4x4" class="form__option">4x4</label>

			<input type="radio" id="board-size-5x5" name="board-size" value="5x5" />
			<label for="board-size-5x5" class="form__option">5x5</label>
		</div>
	</fieldset>
</div>

<div class="form__group">
	<label for="difficulty" class="form__label">Difficulty</label>
	<select id="difficulty" class="form__select" name="difficulty" required>
		<option value="" disabled selected>Select Difficulty</option>
		<option value="easy">Easy</option>
		<option value="moderate">Moderate</option>
		<option value="hard">Hard</option>
		<option value="legendary">Legendary</option>
	</select>
</div>

<div class="form__group">
	<label class="form__label">Game Properties</label>
	<fieldset class="form__fieldset">
		<legend class="form__legend">Select game properties</legend>
		<div class="form__options">
			<input type="checkbox" id="image" name="image" value="image" />
			<label for="image" class="form__option">With Image?</label>

			<input type="checkbox" id="time" name="time" value="time" />
			<label for="time" class="form__option">With Time?</label>
		</div>
	</fieldset>
</div>
</form>

	// TODO: Completar código aquí...
	// Utilizar checkValidity, querySelector, removeAttribute
	const submitBtnEl = event.currentTarget.parentElement.querySelector('button[type="submit"]');

// client/public/utils/index.js

export function addEventToSwapByEmptyNeigbor(eventClickProps, onClick) {
	const { chips, emptyNode, boardSize } = eventClickProps;
  
	chips.forEach((chip) => {
	  chip.addEventListener('click', () => {
		const chipIndex = Array.prototype.indexOf.call(chips, chip);
		const emptyIndex = Array.prototype.indexOf.call(chips, emptyNode);
  
		// Verificar si la pieza está en una posición adyacente a la pieza vacía
		if (
		  (Math.abs(chipIndex - emptyIndex) === 1 && Math.floor(chipIndex / boardSize) === Math.floor(emptyIndex / boardSize)) ||
		  (Math.abs(chipIndex - emptyIndex) === boardSize)
		) {
		  // Intercambiar las piezas
		  const temp = chip.innerHTML;
		  chip.innerHTML = emptyNode.innerHTML;
		  emptyNode.innerHTML = temp;
  
		  // Llamar a la función onClick
		  onClick();
		}
	  });
	});
  }

	if (isFormValid) {
		submitBtnEl.removeAttribute('disabled');
	}
