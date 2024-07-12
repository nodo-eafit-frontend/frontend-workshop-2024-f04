/** 4️⃣ Operators */

// -- Relational operators
{
	// Distancias a diferentes planetas desde la Tierra en millones de kilómetros
	let distanceToMars = 2250;
	let distanceToVenus = 261;
	let distanceToJupiter = 778;

	// Comparación
	let isMarsCloserThanVenus = distanceToMars < distanceToVenus;
	let isJupiterFartherThanMarsAndVenus = distanceToJupiter > distanceToMars && distanceToJupiter > distanceToVenus;

	console.log(`Is Mars closer than Venus? ${isMarsCloserThanVenus}`);
	console.log(`Is Jupiter farther than both Mars and Venus? ${isJupiterFartherThanMarsAndVenus}`);
}

// -- Arithmetic operators
{
	// Variables
	let distanceToPlanet = 500_000; // in kilometers
	let fuelEfficiency = 0.5; // fuel needed per kilometer
	let currentFuel = 200_000; // current fuel in liters

	// Calculation of fuel required
	let fuelNeeded = distanceToPlanet * fuelEfficiency;

	// Arithmetic
	let fuelDeficit = fuelNeeded - currentFuel;
	let extraFuelNeeded = fuelDeficit > 0 ? fuelDeficit : 0; // Conditional (ternary) operator

	console.log(`Fuel needed for the journey: ${fuelNeeded} liters`);
	console.log(`Extra fuel needed: ${extraFuelNeeded} liters`);
}

// -- Equality operators
{
	// Código de acceso correcto
	let correctAccessCode = 'Space2024';

	// Entrada del usuario
	let userAccessCode = 'Space2024';
	let userAccessCodeAttempt2 = 'Space2023';

	// Verificación de igualdad
	let isAccessGranted = userAccessCode === correctAccessCode;
	let isAccessGrantedAttempt2 = userAccessCodeAttempt2 === correctAccessCode;

	console.log(`First attempt: Access granted? ${isAccessGranted}`);
	console.log(`Second attempt: Access granted? ${isAccessGrantedAttempt2}`);
}
// -- Binary logical operators
{
	// System status
	let oxygenLevel = 85; // Percent
	let waterSupply = 75; // Percent
	let foodSupply = 60; // Percent
	let energyLevel = 20; // Percent

	// Thresholds for a safe mission
	const oxygenThreshold = 70;
	const waterThreshold = 50;
	const foodThreshold = 40;
	const energyThreshold = 89;

	// System verification
	let isOxygenSufficient = oxygenLevel >= oxygenThreshold;
	let isWaterSufficient = waterSupply >= waterThreshold;
	let isFoodSufficient = foodSupply >= foodThreshold;
	let isEnergySufficient = energyLevel >= energyThreshold;

	// Binary logical operators
	let isMissionSafe = isOxygenSufficient && isWaterSufficient && isFoodSufficient && isEnergySufficient;
	let needRefillSuplies = !isWaterSufficient || !isFoodSufficient;

	console.log(`\tIs the oxygen level sufficient? ${isOxygenSufficient}`);
	console.log(`\tIs the water supply sufficient? ${isWaterSufficient}`);
	console.log(`\tIs the food supply sufficient? ${isFoodSufficient}`);
	console.log(`\tIs the energy supply sufficient? ${isEnergySufficient}`);
	console.log(`Is the mission safe to proceed? ${isMissionSafe}`);

	console.log(`Do we need to refill supplies? ${needRefillSuplies}`);
}

// -- String operators
{
	let captainName = 'Captain Neo';
	let destination = 'Mars';

	// Message
	let welcomeMessage = `Welcome aboard, ${captainName}!`;
	let destinationMessage = 'Our destination is ' + destination + '.';

	destinationMessage += '\n Please check all your system status';

	// console.log(welcomeMessage);
	// console.log(destinationMessage);
}
