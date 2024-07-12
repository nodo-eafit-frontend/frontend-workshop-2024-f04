import { CHOICES } from "../constants";

/**
 * Genera un número aleatorio entre 0 y 2 (inclusive) para representar la elección de la computadora en un juego de piedra, papel o tijera.
 *
 * @returns {number} Un número aleatorio entre 0 y 2, donde:
 *  - 0 representa "piedra"
 *  - 1 representa "papel"
 *  - 2 representa "tijera"
 */
export default function getComputerChoice() {
	// TODO: Completar Algoritmo
	let randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber) {
		case 0: 
			return CHOICES.rock;
		case 1:
			return CHOICES.paper;
		case 2:
			return CHOICES.scissors;
		default:
			return CHOICES.rock;
	}
}
