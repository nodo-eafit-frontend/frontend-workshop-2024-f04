import { openModal, closeModal } from './utils/index.js';

document.title = 'Sliding Puzzle | Home';

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

/**
 * Event listener for the 'change' event on the newGameFormEl.
 * It checks if the form is valid and enables the submit button if it is.
 *
 * @param {Event} event - The event object associated with the 'change' event.
 * @property {HTMLElement} event.currentTarget - The element that triggered the event (the form).
 * @property {HTMLElement} event.currentTarget.parentElement - The parent element of the form, used to find the submit button.
 */
newGameFormEl.addEventListener('change', (event) => {
	const isFormValid = event.currentTarget.checkValidity();
	const submitBtnEl = event.currentTarget.parentElement.querySelector('button[type="submit"]');

	if (isFormValid) {
		submitBtnEl.removeAttribute('disabled');
	} else {
		submitBtnEl.setAtribute('disable', 'disable');
	}
});
