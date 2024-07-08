import { CHOICES } from '../constants/index.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {
	// TODO: Completar Algoritmo


	if (choiceValue === CHOICES.rock.value){
		return CHOICES.rock;
	}

	else if (choiceValue === CHOICES.paper.value){
		return CHOICES.paper;
	}

	else if (choiceValue === CHOICES.scissors.value){
		return CHOICES.scissors;
	}

	else {
		return null;
	}
	
}
	


	
