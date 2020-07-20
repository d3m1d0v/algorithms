/**
 * negative value   if a < b;
 * zero             if a == b;
 * positive value   if a > b.
 */
export type ComparisonResult = number;
export type Comparator<T> = (a: T, b: T) => ComparisonResult;

/**
 * negative value   if a < {target_value};
 * zero             if a == {target_value};
 * positive value   if a > {target_value}.
 */
export type SearchComparisonResult = number;
export type SearchComparator<T> = (a: T) => SearchComparisonResult;
/**
 * Value and index of target elem
 */
export type SearchResult<T> = [T, number] | [null, -1];
