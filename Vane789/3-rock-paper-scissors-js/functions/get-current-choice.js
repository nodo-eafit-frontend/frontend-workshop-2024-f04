import { CHOICES } from '../constants/index.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {
	
	let currentOpcion = {};

	switch(choiceValue) {
		case 0:
			currentOpcion = CHOICES.rock;
			break;
		case 1: 
			currentOpcion = CHOICES.paper
			break;
		case 2: 
			currentOpcion = CHOICES.scissors
			break;
		default:
			currentOpcion = null;
	}
	return currentOpcion
}