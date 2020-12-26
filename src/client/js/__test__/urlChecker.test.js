import { validateURL } from '../urlChecker';

describe('Function: validateURL', () => {
    test('should validate http://www.google.com', () => {
        expect(validateURL('http://www.google.com')).toBeTruthy();
    });
    test('should in-validate abcd', () => {
        expect(validateURL('abcd')).toBeFalsy();
    });
});