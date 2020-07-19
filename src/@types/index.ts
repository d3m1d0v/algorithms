/**
 * negative value   if a < b;
 * zero             if a == b;
 * positive value   if a > b.
 */
export type ComparisonResult = number;
export type Comparator<T> = (a: T, b: T) => ComparisonResult;
