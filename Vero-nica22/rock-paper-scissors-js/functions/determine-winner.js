import { CHOICES } from '../constants/index.js'; //Trae los objetos de constants index 

/**
 * Determina el ganador del juego de Piedra, Papel o Tijera.
 *
 * @param {Object} playerChoice - La elección del jugador. //Espera que la función reciba un parametro de tipo objeto llamado playerChice
 * @param {string} playerChoice.text - El texto de la elección del jugador (e.g., "Rock"). //Dice que el objeto playerC.. tiene una propiedad llamada text y que espera un string
 * @param {string} playerChoice.emoji - El emoji de la elección del jugador.
 * @param {number} playerChoice.value - El valor de la elección del jugador (e.g., 0 para Rock).
 *
 * @param {Object} computerChoice - La elección de la computadora.
 * @param {string} computerChoice.text - El texto de la elección de la computadora (e.g., "Rock").
 * @param {string} computerChoice.emoji - El emoji de la elección de la computadora.
 * @param {number} computerChoice.value - El valor de la elección de la computadora (e.g., 0 para Rock).
 *
 * @returns {number} - Devuelve 0 si es empate, 1 si el jugador gana, 2 si la computadora gana. //Que retorna un número
 */
export default function determineWinner(playerChoice, computerChoice) {
	let result;

	// TODO: Completar Algoritmo
	

	return result;
}
