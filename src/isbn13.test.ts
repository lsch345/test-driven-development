import { isValid } from "./isbn13";
describe('isValid', () => {
    test('should return true for valid ISBN-13 numbers', () => {
        expect(isValid('9791234567896')).toBe(true);
        expect(isValid('9780306406157')).toBe(true);
    });

    test('should return false for invalid ISBN-13 numbers', () => {
        expect(isValid('9781234567890')).toBe(false);
        expect(isValid('9791234567890')).toBe(false);
    });

    test('should throw error for incorrect length', () => {
        expect(() => isValid('978123456789')).toThrow('ISBN-13 muss genau 13 Ziffern lang sein');
    });

    test('should throw error for non-numeric values', () => {
        expect(() => isValid('97812345abc97')).toThrow('ISBN-13 darf nur Ziffern enthalten');
    });
});