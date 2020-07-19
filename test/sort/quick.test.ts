import { expect } from 'chai';

import { quickSort } from '~/src/sort/quick';
import { numbers, strings, numberComparator, stringComparator } from '~/test/sort/dataset';

describe('sort', () => {
    describe('quick', () => {
        it('test with numbers #1', () => {
            const { value, result } = numbers[0];

            expect(quickSort(value, numberComparator)).to.eql(result);
        });

        it('test with numbers #2', () => {
            const { value, result } = numbers[1];

            expect(quickSort(value, numberComparator)).to.eql(result);
        });

        it('test with strings', () => {
            const { value, result } = strings[0];

            expect(quickSort(value, stringComparator)).to.eql(result);
        });
    });
});
