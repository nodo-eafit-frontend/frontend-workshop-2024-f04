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
	attemps: 0, //Intentos incrementa cada vez que juega
	byDraw: 1, // número de puntos por empates
	byWin: 3, // Puntos de win incrementa cada vez que gana  
	lifes: 3, // Disminuye cada vez que pierde
	score: 0,  //Puntajes (Puntoajes de win y draw)
};
