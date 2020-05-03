import getLetterMatchCount from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    it('returns correct count when there are not matching letters', () => {
        const lettetMatchCount = getLetterMatchCount('bones', secretWord);
        expect(lettetMatchCount).toBe(0);
    });
    it('returns correct count when there are 3 matching letters', () => {
        const lettetMatchCount = getLetterMatchCount('train', secretWord);
        expect(lettetMatchCount).toBe(3);
    });
    it('returns correct count when there are dublicate letters in the guess', () => {
        const lettetMatchCount = getLetterMatchCount('parka', secretWord);
        expect(lettetMatchCount).toBe(3);
    });
})