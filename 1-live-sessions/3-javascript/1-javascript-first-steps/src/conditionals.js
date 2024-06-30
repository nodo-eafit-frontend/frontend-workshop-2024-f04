/** 5️⃣ Conditionals */

// Estado de preparación de la tripulación y sistemas
let crewReady = true;
let systemsCheckPassed = false;
let weatherCondition = 'clear'; // Puede ser 'clear', 'cloudy', 'stormy'
let missionCritical = false;
let launchTime = '08:00 AM';
let currentTime = '07:30 AM';

// Mensajes iniciales
console.log('Mission Control: Preparing for launch.');

// Verificar el estado de la tripulación
if (crewReady) {
	console.log('All crew members are ready.');
} else {
	console.log('Crew members are not ready. Please complete crew preparations.');
}

// Verificar el chequeo de sistemas
if (systemsCheckPassed) {
	console.log('All systems checks have passed.');
} else {
	console.log('Systems checks have not passed. Please recheck all systems.');
}

// Verificar las condiciones meteorológicas usando switch case
switch (weatherCondition) {
	case 'clear':
		console.log('Weather conditions are clear. Good for launch.');
		break;
	case 'cloudy':
		console.log('Weather conditions are cloudy. Monitor closely.');
		break;
	case 'stormy':
		console.log('Weather conditions are stormy. Delay launch.');
		break;
	default:
		console.log('Unknown weather conditions. Proceed with caution.');
}

// Verificar si la misión es crítica
if (missionCritical) {
	console.log('This mission is critical. Proceed with caution.');
} else {
	console.log('This mission is non-critical. Follow standard protocols.');
}

// Verificar si es hora de lanzamiento
if (currentTime === launchTime && crewReady && systemsCheckPassed && weatherCondition === 'clear') {
	console.log('All conditions are optimal. Proceeding with launch.');
} else {
	console.log('Conditions are not optimal for launch. Delaying launch.');
}

// Uso de condicionales anidados para tomar una decisión final
if (crewReady) {
	if (systemsCheckPassed) {
		switch (weatherCondition) {
			case 'clear':
				if (currentTime === launchTime) {
					console.log('Conditions are perfect. Launch initiated.');
				} else {
					console.log('Not launch time yet. Wait until launch time.');
				}
				break;
			case 'cloudy':
				console.log('Weather not clear. Monitoring weather conditions.');
				break;
			case 'stormy':
				console.log('Weather conditions are stormy. Delay launch.');
				break;
			default:
				console.log('Unknown weather conditions. Proceed with caution.');
		}
	} else {
		console.log('Systems check not passed. Recheck all systems.');
	}
} else {
	console.log('Crew not ready. Complete crew preparations.');
}
