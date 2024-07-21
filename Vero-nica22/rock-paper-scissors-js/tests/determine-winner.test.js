import { CHOICES } from '../constants/index.js';
import determineWinner from '../functions/determine-winner.js';

describe('determineWinner', () => {
	it('should return 0 when both choices are the same', () => {
		expect(determineWinner(CHOICES.rock, CHOICES.rock)).toBe(0);
		expect(determineWinner(CHOICES.paper, CHOICES.paper)).toBe(0);
		expect(determineWinner(CHOICES.scissors, CHOICES.scissors)).toBe(0);
	});

	it('should return 1 when player wins', () => {
		expect(determineWinner(CHOICES.rock, CHOICES.scissors)).toBe(1);
		expect(determineWinner(CHOICES.paper, CHOICES.rock)).toBe(1);
		expect(determineWinner(CHOICES.scissors, CHOICES.paper)).toBe(1);
	});

	it('should return 2 when computer wins', () => {
		expect(determineWinner(CHOICES.rock, CHOICES.paper)).toBe(2);
		expect(determineWinner(CHOICES.paper, CHOICES.scissors)).toBe(2);
		expect(determineWinner(CHOICES.scissors, CHOICES.rock)).toBe(2);
	});
});
