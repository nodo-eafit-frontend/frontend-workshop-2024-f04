import { CHOICES } from '../constants/index.js';

/**
 * Determina el ganador del juego de Piedra, Papel o Tijera.
 *
 * @param {Object} playerChoice - La elección del jugador.
 * @param {string} playerChoice.text - El texto de la elección del jugador (e.g., "Rock").
 * @param {string} playerChoice.emoji - El emoji de la elección del jugador.
 * @param {number} playerChoice.value - El valor de la elección del jugador (e.g., 0 para Rock).
 *
 * @param {Object} computerChoice - La elección de la computadora.
 * @param {string} computerChoice.text - El texto de la elección de la computadora (e.g., "Rock").
 * @param {string} computerChoice.emoji - El emoji de la elección de la computadora.
 * @param {number} computerChoice.value - El valor de la elección de la computadora (e.g., 0 para Rock).
 *
 * @returns {number} - Devuelve 0 si es empate, 1 si el jugador gana, 2 si la computadora gana.
 */
export default function determineWinner(playerChoice, computerChoice) {
	let result;

	// if ((playerChoice === CHOICES.rock) && (computerChoice === CHOICES.rock)){
 
    //     result = 0;
    // }
 
    //     else if ((playerChoice === CHOICES.rock) && (computerChoice === CHOICES.paper)){
       
    //         result = 2;
    //     }
 
 
    //     else if ((playerChoice === CHOICES.rock) && (computerChoice === CHOICES.scissors)){
       
    //         result = 1;
    //     }
 
    //     else if ((playerChoice === CHOICES.paper) && (computerChoice === CHOICES.paper)){
       
    //         result = 0;
    //     }
 
    //     else if ((playerChoice === CHOICES.paper) && (computerChoice === CHOICES.rock)){
       
    //         result = 1;
    //     }
 
    //     else if ((playerChoice === CHOICES.paper) && (computerChoice === CHOICES.scissors)){
       
    //         result = 2;
    //     }
 
    //     else if ((playerChoice === CHOICES.scissors) && (computerChoice === CHOICES.scissors)){
       
    //         result = 0;
    //     }
 
    //     else if ((playerChoice === CHOICES.scissors) && (computerChoice === CHOICES.rock)){
       
    //         result = 2;
    //     }
       
    //     else {
       
    //         result = null;
    //     }
	
	switch (playerChoice) {
        case CHOICES.rock:
            switch (computerChoice) {
                case CHOICES.rock:
                    result = 0;
                    break;
                case CHOICES.paper:
                    result = 2;
                    break;
                case CHOICES.scissors:
                    result = 1;
                    break;
                default:
                    result = null;
            }
            break;
 
        case CHOICES.paper:
            switch (computerChoice) {
                case CHOICES.rock:
                    result = 1;
                    break;
                case CHOICES.paper:
                    result = 0;
                    break;
                case CHOICES.scissors:
                    result = 2;
                    break;
                default:
                    result = null;
            }
            break;
 
        case CHOICES.scissors:
            switch (computerChoice) {
                case CHOICES.rock:
                    result = 2;
                    break;
                case CHOICES.paper:
                    result = 1;
                    break;
                case CHOICES.scissors:
                    result = 0;
                    break;
                default:
                    result = null;
            }
            break;
 
        default:
            result = null;
    }
	// TODO: Completar Algoritmo

	return result;
}
