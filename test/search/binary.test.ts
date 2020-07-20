import { expect } from 'chai';

import { binarySearch } from '~/src/search/binary';

describe('search', () => {
    describe('binary', () => {
        const comparatorFor = (target: number) => (a: number) => a - target;

        it('test #1', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4],
                comparatorFor(0),
            );

            expect(result).to.eql([0, 0]);
        });

        it('test #2', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4],
                comparatorFor(2),
            );

            expect(result).to.eql([2, 2]);
        });

        it('test #3', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4, 5],
                comparatorFor(3),
            );

            expect(result).to.eql([3, 3]);
        });

        it('test #4', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4, 5],
                comparatorFor(2),
            );

            expect(result).to.eql([2, 2]);
        });

        it('test #5', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4, 5],
                comparatorFor(5),
            );

            expect(result).to.eql([5, 5]);
        });

        it('test #6', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4, 5],
                comparatorFor(9),
            );

            expect(result).to.eql([null, -1]);
        });

        it('test #7', () => {
            const result = binarySearch(
                [0, 1, 2, 3, 4, 5, 6, 7],
                comparatorFor(-9),
            );

            expect(result).to.eql([null, -1]);
        });
    });
});
