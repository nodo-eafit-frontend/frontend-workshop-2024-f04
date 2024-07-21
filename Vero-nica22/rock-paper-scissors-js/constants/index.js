// Definimos los option para las opciones
//para poder exportar en otros modulos se pone export
export const CHOICES = { //Opciones
	rock: {
		text: 'Rock',
		emoji: '✊',
		value: 0,
	},
	paper: {
		text: 'Paper',
		emoji: '✋',
		value: 1,
	},
	scissors: {
		text: 'Scissors',
		emoji: '✌️',
		value: 2,
	},
};

export const MESSAGES = {
	question: 'Choose your option', //Elige tu opción
	results: ["It's a tie! 🤝", 'You win! 🥳', 'Computer wins! 🤖'],
	gameOver: 'Game over! 🎮', //Se acabó el juego
};

export const stats = { //Estadisticas
	attemps: 0, //Intentos
	byDraw: 1, //Por sorteo
	byWin: 3, //Por ganar 
	lifes: 3, //Vidas
	score: 0, //Puntaje
};
