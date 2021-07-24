import { expect } from 'chai';

import { checkBracketsFactory } from '~/src/brackets';

describe('brackets', () => {
    const checkBrackets = checkBracketsFactory([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ]);

    it('invalid definition', () => {
        expect(() =>
            checkBracketsFactory([
                ['(', ')'],
                ['{', '}'],
                ['[', ']'],
                ['(', '{'],
            ]),
        ).to.be.throw(Error, 'Invalid arguments. Intersection in open and close brackets sets: \'{\'',)
    });

    it('empty string', () => {
        expect(checkBrackets('')).to.be.true;
    });

    it('without brackets string', () => {
        expect(checkBrackets('0123456789abcdef+-=@#$%!')).to.be.true;
    });

    it('simple brackets pairs', () => {
        expect(checkBrackets('()')).to.be.true;
        expect(checkBrackets('{}')).to.be.true;
        expect(checkBrackets('[]')).to.be.true;

        expect(checkBrackets(')(')).to.be.false;
        expect(checkBrackets('}{')).to.be.false;
        expect(checkBrackets('][')).to.be.false;
    });

    it('with brackets and numbers', () => {
        expect(checkBrackets('(1){2}[3]')).to.be.true;
        expect(checkBrackets('1(2{3[4]5}6)7')).to.be.true;
    });

    it('correct brackets only strings', () => {
        expect(checkBrackets('({[]})')).to.be.true;
        expect(checkBrackets('({[]})[]{}{}([{}])')).to.be.true;
    });

    it('incorrect brackets only strings', () => {
        expect(checkBrackets('({}[)]')).to.be.false;
        expect(checkBrackets('(())(){[}]')).to.be.false;
        expect(checkBrackets('[({})[')).to.be.false;
    });
});
