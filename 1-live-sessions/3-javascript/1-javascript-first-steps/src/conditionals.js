/** 5️⃣ Conditionals */

// Estado de preparación de la tripulación y sistemas
let crewReady = true;
let systemsCheckPassed = true;
let weatherCondition = 'clear'; // Puede ser 'clear', 'cloudy', 'stormy'
let missionCritical = true;
let launchTime = '09:00 AM';
let currentTime = '08:00 AM';

// const day = 'mondays';

// if (day === 'monday') {
// 	console.log('Today is monday');
// } else if (day === 'tuesday') {
// 	console.log('Today is tuesday');
// } else if (day === 'wendnesday') {
// 	console.log('Today is wendnesday');
// } else if (day === 'thrusday') {
// 	console.log('Today is thrusday');
// } else if (day === 'friday') {
// 	console.log('Today is friday');
// } else if (day === 'saturday') {
// 	console.log('Today is saturday');
// } else {
// 	console.log('Today is sunday');
// }

// switch (day) {
// 	case 'monday':
// 		console.log('Today is monday');
// 		console.log('Today is monday');
// 		console.log('Today is monday');
// 		console.log('Today is monday');
// 		console.log('Today is monday');
// 		break;
// 	case 'tuesday':
// 		console.log('Today is tuesday');
// 		break;
// 	case 'wendnesday':
// 		console.log('Today is wendnesday');
// 		break;
// 	case 'thrusday':
// 		console.log('Today is thrusday');
// 		break;
// 	case 'friday':
// 		console.log('Today is friday');
// 		break;
// 	case 'saturday':
// 		console.log('Today is saturday');
// 		break;
// 	default:
// 		console.log('Today is sunday');
// }

// console.log('Ejecución finalizada');

// Mensajes iniciales
console.log('Mission Control: Preparing for launch.');

// Verificar el estado de la tripulación
// if (crewReady) {
// 	console.log('All crew members are ready.');
// } else {
// 	console.log('Crew members are not ready. Please complete crew preparations.');
// }

// // Verificar el chequeo de sistemas
// if (systemsCheckPassed) {
// 	console.log('All systems checks have passed.');
// } else {
// 	console.log('Systems checks have not passed. Please recheck all systems.');
// }

// // Verificar las condiciones meteorológicas usando switch case
// switch (weatherCondition) {
// 	case 'clear':
// 		console.log('Weather conditions are clear. Good for launch.');
// 		break;
// 	case 'cloudy':
// 		console.log('Weather conditions are cloudy. Monitor closely.');
// 		break;
// 	case 'stormy':
// 		console.log('Weather conditions are stormy. Delay launch.');
// 		break;
// 	default:
// 		console.log('Unknown weather conditions. Proceed with caution.');
// }

// // Verificar si la misión es crítica
// if (missionCritical) {
// 	console.log('This mission is critical. Proceed with caution.');
// } else {
// 	console.log('This mission is non-critical. Follow standard protocols.');
// }

// // Verificar si es hora de lanzamiento
// if (currentTime === launchTime && crewReady && systemsCheckPassed && weatherCondition === 'clear') {
// 	console.log('All conditions are optimal. Proceeding with launch.');
// } else {
// 	console.log('Conditions are not optimal for launch. Delaying launch.');
// }

// // Uso de condicionales anidados para tomar una decisión final
// if (crewReady) {
// 	if (systemsCheckPassed) {
// 		switch (weatherCondition) {
// 			case 'clear':
// 				if (currentTime === launchTime) {
// 					console.log('Conditions are perfect. Launch initiated.');
// 				} else {
// 					console.log('Not launch time yet. Wait until launch time.');
// 				}
// 				break;
// 			case 'cloudy':
// 				console.log('Weather not clear. Monitoring weather conditions.');
// 				break;
// 			case 'stormy':
// 				console.log('Weather conditions are stormy. Delay launch.');
// 				break;
// 			default:
// 				console.log('Unknown weather conditions. Proceed with caution.');
// 		}
// 	} else {
// 		console.log('Systems check not passed. Recheck all systems.');
// 	}
// } else {
// 	console.log('Crew not ready. Complete crew preparations.');
// }

if (currentTime === launchTime && crewReady && systemsCheckPassed && weatherCondition === 'clear') {
	console.log('Conditions are perfect. Launch initiated.');
} else if (weatherCondition !== 'clear') {
	switch (weatherCondition) {
		case 'cloudy':
			console.log('Weather not clear. Monitoring weather conditions.');
			break;
		case 'stormy':
			console.log('Weather conditions are stormy. Delay launch.');
			break;
		default:
			console.log('Unknown weather conditions. Proceed with caution.');
	}
} else if (currentTime !== launchTime) {
	console.log('Not launch time yet. Wait until launch time.');
} else if (!crewReady) {
	console.log('Crew not ready. Complete crew preparations.');
} else {
	console.log('Mission is not ready! :(');
}
