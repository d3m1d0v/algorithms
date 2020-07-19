import { Comparator } from '~/src/@types';

export const numberComparator: Comparator<number> = (a, b) => a - b;
export const stringComparator: Comparator<string> = (a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
};

export const numbers = [
    {
        value: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
        value: [5, 9, 6, 5, 3, 0, 1, 1],
        result: [0, 1, 1, 3, 5, 5, 6, 9],
    },
];

export const strings = [
    {
        value: ['d', 'c', 'e', 'a', 'f', 'b'],
        result: ['a', 'b', 'c', 'd', 'e', 'f'],
    },
];
