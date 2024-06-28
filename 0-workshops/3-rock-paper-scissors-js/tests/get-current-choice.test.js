import { CHOICES } from '../constants/index.js';
import getCurrentChoice from '../functions/get-current-choice.js';

describe('getCurrentChoice', () => {
	it('should return the correct choice object for a valid choice value', () => {
		expect(getCurrentChoice(CHOICES.rock.value)).toEqual(CHOICES.rock);
		expect(getCurrentChoice(CHOICES.paper.value)).toEqual(CHOICES.paper);
		expect(getCurrentChoice(CHOICES.scissors.value)).toEqual(CHOICES.scissors);
	});

	it('should return null for an invalid choice value', () => {
		expect(getCurrentChoice('invalid')).toBeNull();
	});
});
