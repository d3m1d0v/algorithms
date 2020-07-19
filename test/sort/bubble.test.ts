import { expect } from 'chai';

import { bubbleSort } from '~/src/sort/bubble';
import { numbers, strings, numberComparator, stringComparator } from '~/test/sort/dataset';

describe('sort', () => {
    describe('bubble', () => {
        it('test with numbers #1', () => {
            const { value, result } = numbers[0];

            expect(bubbleSort(value, numberComparator)).to.eql(result);
        });

        it('test with numbers #2', () => {
            const { value, result } = numbers[1];

            expect(bubbleSort(value, numberComparator)).to.eql(result);
        });

        it('test with strings', () => {
            const { value, result } = strings[0];

            expect(bubbleSort(value, stringComparator)).to.eql(result);
        });
    });
});
