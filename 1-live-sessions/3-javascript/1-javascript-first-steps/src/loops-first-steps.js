/** 4️⃣ Loops - first steps */

let number = 2;
let count = 0;
let length = 100;

// const result = number * count;
// console.log(result); // imprimir resultado tabla del
// count++; // count += 1; // count = count + 1;

// while (count < length) {
// 	const result = number * count;
// 	console.log(result); // imprimir resultado tabla del
// 	count++; // count += 1; // count = count + 1;
// }

// const row = 100;
// const col = 100;

// for (let countCol = 0; countCol < col; countCol++) {
// 	for (let countRow = 0; countRow < row; countRow++) {
// 		console.log(countCol, countRow); // imprimir resultado tabla del
// 	}
// }

// const row = 3;
// const col = 3;

// for (let i = 0; i < row * col; i++) {
// 	const countCol = Math.floor(i / row);
// 	const countRow = i % row;
// 	console.log(countCol, countRow); // imprimir resultado de la tabla
// }

// do {
// 	const result = number * count;
// 	console.log(result); // imprimir resultado tabla del
// 	count++; // count += 1; // count = count + 1;
// } while (count < length);

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
