import { absoluteValuesSumMinimization } from './absoluteValuesSumMinization';

describe(absoluteValuesSumMinimization.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 4, 7];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(4);
    });

    it('Test 2', () => {
        // arrange
        const data = [2, 4, 6, 7];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(4);
    });

    it('Test 3', () => {
        // arrange
        const data = [2, 4, 6, 6, 7];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(6);
    });

    it('Test 4', () => {
        // arrange
        const data = [2, 4, 6, 6, 7, 8];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(6);
    });
});
