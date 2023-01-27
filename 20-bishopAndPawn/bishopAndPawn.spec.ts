import { bishopAndPawn } from './bishopAndPawn';

describe(bishopAndPawn.name, () => {
    it('Test 1', () => {
        // arrange
        const position1 = 'a1';
        const position2 = 'c3';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'h1';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 3', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'c2';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 4', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'b7';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 5', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'e1';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(false);
    });

    it('Test 6', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'a4';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(false);
    });

    it('Test 7', () => {
        // arrange
        const position1 = 'e4';
        const position2 = 'h6';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(false);
    });
});
