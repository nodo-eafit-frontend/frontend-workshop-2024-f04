/** 1️⃣ Varialbes */
{
	const moonBaseName = 'Lunar-base-xs01'; // ES6+
	let moonPhases = '🌖'; // ES6+

	var ovni = '👽'; // ES5

	/** Varialbes Declaration */
	// var ovni = '👾'; // ✅ '👾'

	// const moonBaseName = 'Other-Lunar-base'; // ❌ SyntaxError
	// let moonPhases = '🌘'; // ❌ SyntaxError

	/** Variables Assignation */
	// moonBaseName = 'Other-Lunar-base'; // ❌ SyntaxError
	// moonPhases = '🌘'; // ✅ '🌘'

	// ovni = '👾'; // ✅ '👾'
}

/** 2️⃣ Data Types */
/** -- Primitive values */
{
	// String
	const origin = 'Moon';
	let destiny = 'Mars';
	let zero = 0; // es Falsy
	let empty = ''; // es Falsy

	// Number
	let crewSize = 10;
	let amountSupplies = 300.12345;
	let dintanceDestiny = 3_000_000;
	let NotANumber = NaN; // es Falsy

	// BigInt ±(2^53 - 1)
	let distanceCovered = 150_000_000_000_000n;

	// Boolean
	let onMission = true;
	let onTheMoon = false; // es Falsy

	// Symbol
	const START = Symbol('start');
	const STOP = Symbol('stop');

	// Undefined & Null  // es Falsy
	let emptyness = undefined;
	let trash = null;
}

// Alteración del dato
{
	let nombre;
	let id;
	let withImage;

	// Registro de la persona
	nombre = 'Jhon';
	id = 1649799;
	withImage = false;

	// console.log(nombre, id, withImage);
}

/** 3️⃣ Type Conversion & Coercion */
{
	// To Number
	let destiny = 'Mars';
	let id = '1254865487';

	destiny = Number(destiny);
	id = +id;

	// console.log('Conversión string a Number 1 =============');
	// console.log(destiny);
	// console.log(typeof destiny);

	// console.log('Conversión string a Number 2 =============');
	// console.log(id);
	// console.log(typeof id);

	// To Boolean

	let anotherDestiny = '';

	anotherDestiny = Boolean(anotherDestiny);

	console.log(typeof anotherDestiny, anotherDestiny);
}

// Mutable vs Inmutable
