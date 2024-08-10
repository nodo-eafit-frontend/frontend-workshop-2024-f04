// let colombia = 1;
// let panama = 0;

// // Declaración
// function agregarMarcador(marcadorActual) {
// 	let resultado = marcadorActual + 1;

// 	return resultado;
// }

// function imprimirMarcador(local, visitante) {
// 	return `\n\nMarcador del partido: Colombia ${local} - ${visitante} Panamá\n\n`;
// }

// function sumar(param1, param2, param3) {
// 	return param1 + param2 + param3;
// }

// // Ejecución
// colombia = agregarMarcador(colombia);
// panama = agregarMarcador(panama);

// let messsage = imprimirMarcador(colombia, panama);

// console.log(sumar(1, 2));

// Normal function to travel to a planet
function travelToPlanet(planet) {
	console.log(`Traveling to ${planet}! Buckle up.`);
	// ... (logic to simulate the journey)
	console.log(`We have arrived at ${planet}! Prepare to explore.`);
}

// Arrow function to scan for alien life
let scanForLife = (planet) => {
	const isLifePresent = Math.random() < 0.5; // 50% chance of finding life
	if (isLifePresent) {
		console.log(`Incredible! We have detected signs of life on ${planet}.`);
	} else {
		console.log(`We haven't found any signs of life on ${planet}.`);
	}
};

scanForLife = (planet) => {
	return 'Hi planet ' + planet;
};

// Example usage
console.log('\n\n');
travelToPlanet('Mars');
scanForLife('Mars');
console.log('\n\n');
travelToPlanet('Venus');
scanForLife('Venus');
console.log('\n\n');
