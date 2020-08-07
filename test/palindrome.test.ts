import { expect } from 'chai';

import { isPalindrome, isPalindromeR } from '~/src/palindrome';

describe('palindrome', () => {
    ([
        ['loop', isPalindrome],
        ['recursion', isPalindromeR]
    ] as const).forEach(([method, palindrome]) => {
        describe(method, () => {
            it('empty string', () => {
                expect(palindrome('')).be.false;
            });

            it('one symbol', () => {
                expect(palindrome('a')).be.true;
            });

            it('string: aa', () => {
                expect(palindrome('aa')).be.true;
            });

            it('string: ab', () => {
                expect(palindrome('ab')).be.false;
            });

            it('string: racecar', () => {
                expect(palindrome('racecar')).be.true;
            });

            it('string: table', () => {
                expect(palindrome('table')).be.false;
            });
        });
    });
});
