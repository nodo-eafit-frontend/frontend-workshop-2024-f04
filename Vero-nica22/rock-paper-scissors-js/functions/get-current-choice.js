import { CHOICES} from '../constants/index.js';
import getComputerChoice from '../functions/get-computer-choice.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {
	// TODO: Completar Algoritmo
	for (const choice in CHOICES) {
		if (CHOICES[choice].value === choiceValue) {
            return CHOICES[choice].text;
        }
	}
	return null;
}
let computerChoice = getComputerChoice();
console.log(getCurrentChoice(computerChoice));
