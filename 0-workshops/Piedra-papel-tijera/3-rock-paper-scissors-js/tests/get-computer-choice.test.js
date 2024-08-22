import getComputerChoice from '../functions/get-computer-choice.js';

describe('getComputerChoice', () => {
	it('should return a random number between 0 and 2', () => {
		const choice = getComputerChoice();
		expect(choice).toBeGreaterThanOrEqual(0);
		expect(choice).toBeLessThanOrEqual(2);
	});
});
