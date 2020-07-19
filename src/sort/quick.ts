import { Comparator } from '~/src/@types';

export function quickSort<T>(array: T[], compare: Comparator<T>): T[] {
    if (array.length < 2) return array;

    if (array.length === 2) {
        const [a, b] = array;

        if (compare(a, b) > 0) return [b, a];

        return array;
    }

    const pivotIdx = Math.round(array.length / 2);
    const pivotValue = array[pivotIdx];
    const less: T[] = [];
    const greater: T[] = [];

    for (let i = 0; i < array.length; ++i) {
        if (i === pivotIdx) continue;

        const value = array[i];

        if (compare(value, pivotValue) <= 0) {
            less.push(value);
        } else {
            greater.push(value);
        }
    }

    return quickSort(less, compare).concat(pivotValue, quickSort(greater, compare));
}
