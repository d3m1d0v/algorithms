import { PalindromeFn } from '~/src/@types';

export const isPalindrome: PalindromeFn = str => {
    if (str.length === 0) return false;

    let l = 0;
    let r = str.length - 1;

    while (l <= r) {
        if (str[l] !== str[r]) return false;

        l++; r--;
    }

    return true;
};

export const isPalindromeR: PalindromeFn = str => {
    if (str.length === 0) return false;
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];

    return str[0] === str[str.length - 1] && isPalindromeR(str.slice(1, -1));
}
