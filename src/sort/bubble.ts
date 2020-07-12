/**
 * negative value   if a < b;
 * zero             if a == b;
 * positive value   if a > b.
 */
export type ComparisonResult = number;
export type Comparator<T> = (a: T, b: T) => ComparisonResult;

/**
 * Swaps two elems of an array.
 * Modifies an existing array.
 */
function swap<T>(array: T[], leftIdx: number, rightIdx: number): T[] {
    const tmp = array[leftIdx];

    array[leftIdx] = array[rightIdx];
    array[rightIdx] = tmp;

    return array;
}

/**
 * Sorts an array using bubble sort algorithm
 * Return new array
 */
export function bubbleSort<T>(array: T[], compare: Comparator<T>): T[] {
    array = [...array];

    for (let limit = array.length - 1; limit > 0; --limit) {
        let wasSwap = false;

        for (let idx = 0; idx < limit; ++idx) {
            const aIdx = idx;
            const bIdx = idx + 1;

            if (compare(array[aIdx], array[bIdx]) > 0) {
                swap(array, aIdx, bIdx);

                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return array;
}
