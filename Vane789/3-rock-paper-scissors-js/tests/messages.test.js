import { getScoreMessage, getChoicesMessage } from '../functions/messages.js';

describe('getChoicesMessage', () => {
	it('should return a message showing the player and computer choices', () => {
		const playerChoice = {
			text: 'Rock',
			emoji: '✊',
			value: 0,
		};
		const computerChoice = {
			text: 'Paper',
			emoji: '✋',
			value: 1,
		};

		const message = getChoicesMessage(playerChoice, computerChoice);

		expect(message).toContain('✊');
		expect(message).toContain('✋');
		expect(message).toContain('player');
		expect(message).toContain('computer');
	});
});

describe('getScoreMessage', () => {
	it('should return a formatted message with score and lifes', () => {
		const stats = { score: 10, lifes: 3 };
		const message = getScoreMessage(stats);

		expect(message).toContain('10🪙');
		expect(message).toContain('3💞');
		expect(message).toContain('Score');
		expect(message).toContain('Lifes');
	});
});
