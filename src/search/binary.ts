import { SearchComparator, SearchResult } from '~/src/@types';

export function binarySearch<T>(array: T[], compare: SearchComparator<T>): SearchResult<T> {
    let left = 0;
    let right = array.length - 1;
    let pivotIdx = -1;
    let pivotValue: T;
    let isFound = false;

    while (!isFound && left <= right) {
        pivotIdx = left + Math.floor((right - left) / 2);
        pivotValue = array[pivotIdx];

        const compareResult = compare(pivotValue);

        if (compareResult > 0) {
            right = pivotIdx - 1;
        } else if (compareResult < 0) {
            left = pivotIdx + 1;
        } else {
            isFound = true;
        }
    }

    return isFound ? [pivotValue!, pivotIdx] : [null, -1];
}
