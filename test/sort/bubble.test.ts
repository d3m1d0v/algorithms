import { expect } from 'chai';
import { bubbleSort, Comparator } from '~/src/sort/bubble';

describe('sort', () => {
    describe('bubble', () => {
        const cmp: Comparator<number> = (a, b) => {
            return a - b;
        };

        it('test with numbers #1', () => {
            const result = bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], cmp);

            expect(result).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('test with numbers #2', () => {
            const result = bubbleSort([5, 9, 6, 5, 3, 0, 1, 1], cmp);

            expect(result).to.eql([0, 1, 1, 3, 5, 5, 6, 9]);
        });

        it('test with strings', () => {
            const result = bubbleSort(['d', 'c', 'e', 'a', 'f', 'b'], (a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                else return 0;
            });

            expect(result).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
        });
    });
});
