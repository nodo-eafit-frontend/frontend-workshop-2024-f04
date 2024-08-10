// Definición de la nave espacial
let spaceship = {
	name: 'Explorer 1',
	fuelLevel: 100,
	shieldLevel: 80,
	speed: 0,
	location: 'Earth',
};

// Definición de la tripulación
const crew = {
	captain: {
		name: 'Captain Kirk',
		rank: 'Captain',
		experience: 10, // años
	},
	pilot: {
		name: 'Sulu',
		rank: 'Lieutenant',
		experience: 8, // años
	},
	engineer: {
		name: 'Scotty',
		rank: 'Chief Engineer',
		experience: 12, // años
	},
};

// Mostrar el estado inicial de la nave y la tripulación
console.log('Estado inicial de la nave espacial:');
console.log(spaceship);
console.log('Tripulación:');
console.log(crew);

// Funciones para interactuar con la nave espacial
const spaceshipOperations = {
	refuel: function (amount) {
		this.fuelLevel += amount;
		console.log(`Reabasteciendo combustible en ${amount}. Nivel de combustible actual: ${this.fuelLevel}`);
	},
	shieldRepair: function (amount) {
		this.shieldLevel += amount;
		console.log(`Reparando escudos en ${amount}. Nivel de escudo actual: ${this.shieldLevel}`);
	},
	setSpeed: function (newSpeed) {
		this.speed = newSpeed;
		console.log(`Estableciendo velocidad a ${newSpeed}. Velocidad actual: ${this.speed}`);
	},
	travelTo: function (newLocation) {
		this.location = newLocation;
		console.log(`Viajando a ${newLocation}. Ubicación actual: ${this.location}`);
	},
};

// Agregar las funciones a la nave espacial
// Object.assign(spaceship, spaceshipOperations);

spaceship = { ...spaceship, ...spaceshipOperations };

console.log(spaceship);

// Funciones para interactuar con la tripulación
const crewOperations = {
	promote: function (rankIncrease) {
		this.rank = rankIncrease;
		console.log(`${this.name} ha sido promovido a ${this.rank}`);
	},
	gainExperience: function (years) {
		this.experience += years;
		console.log(`${this.name} ha ganado ${years} años de experiencia. Experiencia actual: ${this.experience} años`);
	},
};

// Agregar las funciones a cada miembro de la tripulación
Object.assign(crew.captain, crewOperations);
Object.assign(crew.pilot, crewOperations);
Object.assign(crew.engineer, crewOperations);

// Realizar algunas operaciones en la nave espacial y la tripulación
spaceship.refuel(20);
spaceship.shieldRepair(15);
spaceship.setSpeed(50);
spaceship.travelTo('Mars');

crew.captain.promote('Admiral');
crew.pilot.gainExperience(2);
crew.engineer.gainExperience(3);

// Mostrar el estado actualizado de la nave y la tripulación
console.log('\nEstado actualizado de la nave espacial:');
console.log(spaceship);
console.log('Tripulación:');
console.log(crew);
