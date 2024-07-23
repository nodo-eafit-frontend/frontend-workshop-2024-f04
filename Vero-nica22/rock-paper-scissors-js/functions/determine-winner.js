import { CHOICES } from '../constants/index.js'; //Trae los objetos de constants index 
import getComputerChoice from '../functions/get-computer-choice.js';
import getCurrentChoice from '../functions/get-current-choice.js';

/**
 * Determina el ganador del juego de Piedra, Papel o Tijera.
 *
 * @param {Object} playerChoice - La elección del jugador. //Espera que la función reciba un parametro de tipo objeto llamado playerChice
 * @param {string} playerChoice.text - El texto de la elección del jugador (e.g., "Rock"). //Dice que el objeto playerC.. tiene una propiedad llamada text y que espera un string
 * @param {string} playerChoice.emoji - El emoji de la elección del jugador.
 * @param {number} playerChoice.value - El valor de la elección del jugador (e.g., 0 para Rock). //El número de la elección del jugador
 *
 * @param {Object} computerChoice - La elección de la computadora.
 * @param {string} computerChoice.text - El texto de la elección de la computadora (e.g., "Rock").
 * @param {string} computerChoice.emoji - El emoji de la elección de la computadora.
 * @param {number} computerChoice.value - El valor de la elección de la computadora (e.g., 0 para Rock).
 *
 * @returns {number} - Devuelve 0 si es empate, 1 si el jugador gana, 2 si la computadora gana. //Que retorna un número
 */

	// papel le gana a piedra 1 _ 0
	// piedra le gana a tijeras 0 _ 2      piedra: 0 papel: 1  tijeras: 2
	// tijeras le gana a papel 2 _ 1

export default function determineWinner(playerChoice, computerChoice) {
	let result;
	if (playerChoice.value === computerChoice.value) {
		result = 0; //Empate

	}else if (playerChoice.value === 0 && computerChoice.value === 1 ){
		result = 2;

	}else if (playerChoice.value === 1 && computerChoice.value === 0){
		result = 1;
	
	}else if (playerChoice.value === 0 && computerChoice.value === 2){
		result = 1;

	}else if (playerChoice.value === 2 && computerChoice.value === 0){
		result = 2;

	}else if (playerChoice.value === 2 && computerChoice.value === 1){
		result = 1;

	}else if (playerChoice.value === 1 && computerChoice.value === 2){
		result = 2;

	}else{
		result = null;
	}
	
	return result;
}

// let computerChoice = getComputerChoice();
// let optionComputer = getCurrentChoice(computerChoice);
// let playerChoice = {
// 	text: 'Rock',
// 	emoji: '✊',
// 	value: 0,
// };
// console.log(playerChoice);
// console.log(optionComputer);
// console.log(determineWinner(playerChoice, optionComputer));