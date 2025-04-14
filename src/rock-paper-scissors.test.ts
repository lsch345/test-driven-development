import { play } from "./rock-paper-scissors";
describe('play', () => {
    test('should return 1 if player 1 wins', () => {
        expect(play('rock', 'scissors')).toBe(1);
        expect(play('paper', 'rock')).toBe(1);
        expect(play('scissors', 'paper')).toBe(1);
    });

    test('should return 2 if player 2 wins', () => {
        expect(play('rock', 'paper')).toBe(2);
        expect(play('paper', 'scissors')).toBe(2);
        expect(play('scissors', 'rock')).toBe(2);
    });

    test('should return 0 if it\'s a draw', () => {
        expect(play('rock', 'rock')).toBe(0);
        expect(play('paper', 'paper')).toBe(0);
        expect(play('scissors', 'scissors')).toBe(0);
    });

    test('should throw an error for invalid moves', () => {
        expect(() => play('invalid', 'rock')).toThrow('Invalid move');
        expect(() => play('rock', 'invalid')).toThrow('Invalid move');
    });
});  