/** 4️⃣ Loops - first steps */
{
	const solarSystems = 5; // Number of solar systems to explore
	let totalResources = 0; // Variable to accumulate resources

	// For loop to explore each solar system
	for (let i = 1; i <= solarSystems; i++) {
		const planets = Math.floor(Math.random() * 4) + 2; // 2-5 planets per system
		console.log(`Exploring solar system ${i}...`);

		// While loop to explore each planet in the system
		let currentPlanet = 1;
		while (currentPlanet <= planets) {
			const resourcesFound = Math.floor(Math.random() * 50) + 10; // 10-60 resources per planet
			console.log(`  Planet ${currentPlanet}: Found ${resourcesFound} units of resources!`);
			totalResources += resourcesFound;
			currentPlanet++;
		}
	}

	console.log(`Exploration complete! Total resources found: ${totalResources}`);
}
