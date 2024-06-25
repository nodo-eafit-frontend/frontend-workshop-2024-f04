// Normal function to travel to a planet
function travelToPlanet(planet) {
	console.log(`Traveling to ${planet}! Buckle up.`);
	// ... (logic to simulate the journey)
	console.log(`We have arrived at ${planet}! Prepare to explore.`);
}

// Arrow function to scan for alien life
const scanForLife = (planet) => {
	const isLifePresent = Math.random() < 0.5; // 50% chance of finding life
	if (isLifePresent) {
		console.log(`Incredible! We have detected signs of life on ${planet}.`);
	} else {
		console.log(`We haven't found any signs of life on ${planet}.`);
	}
};

// Example usage
travelToPlanet('Mars');
scanForLife('Mars');

travelToPlanet('Venus');
scanForLife('Venus');
