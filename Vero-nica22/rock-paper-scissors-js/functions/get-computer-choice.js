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
	let computerChoice = Math.floor(Math.random() * 3); //Un número random entre 0 y 2
	return computerChoice; //Devuelve el número aleatorio como la elección de la computadora
}
// console.log(getComputerChoice());
