import { circleOfNumbers } from './circleOfNumbers';

describe(circleOfNumbers.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 10;
        const firstNumber = 2;

        // act
        const response = circleOfNumbers(n, firstNumber);

        // assert
        expect(response).toBe(7);
    });

    it('Test 2', () => {
        // arrange
        const n = 12;
        const firstNumber = 1;

        // act
        const response = circleOfNumbers(n, firstNumber);

        // assert
        expect(response).toBe(7);
    });
});
