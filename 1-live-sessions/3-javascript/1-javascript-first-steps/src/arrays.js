const bag = ['pencil', 'wallet', null];
// const advancedBag = {
// 	pocket1: 'pencil',
// 	pocket2: 100,
// };

// console.log(bag, '\n\n');

// console.log(2, bag[2], '\n\n');

// let index = 0;

// while (index < bag.length) {
// 	console.log(index, bag[index]);

// 	index++;
// }

// for (let index = 0; index < bag.length; index++) {
// 	if (bag[index]) {
// 		console.log(index, bag[index]);
// 	}
// }

// bag.forEach((item, index, array) => {
// 	if (item) {
// 		console.log(index, item);
// 	}
// });

// const filtered = bag.filter((item, index, array) => {
// 	return item;
// });

// console.log(filtered);

const prices = [100, 30, 20, 50];

let newPrice = prices.map((item) => {
	return item * 0.9;
});

console.log(newPrice);
