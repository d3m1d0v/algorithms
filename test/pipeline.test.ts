import './setup';

import { expect, spy } from 'chai';

import { Pipeline } from '~/src/pipeline';

describe('pipeline', () => {
    const add1 = (val: number) => val + 1;
    const mul5 = (val: number) => val * 5;
    const div2 = (val: number) => val / 2;

    it('simple usage', () => {
        const value = Pipeline.from(1)
            .pipe(add1)
            .pipe(mul5)
            .pipe(div2)
            .end();

        expect(value).to.be.equal(5);
    });

    it('with different types', () => {
        const result = Pipeline.from(7)
            .pipe(mul5) // 35
            .pipe(mul5) // 175
            .pipe(String)
            .pipe(val => val.split('')) // 1 7 5
            .pipe(arr => arr.map(Number))
            .pipe(arr => arr.map(add1)) // 2 8 6
            .pipe(arr => arr.reduce((acc, val) => acc + val)) // 16
            .pipe(val => ({ val }))
            .pipe(obj => () => obj.val)
            .end();

        expect(result()).to.be.equal(16);
    });

    it('lazy calculation', () => {
        const spyAdd1 = spy(add1);
        const spyMul5 = spy(mul5);
        const spydiv2 = spy(div2);

        const pipeline = Pipeline.from(1)
            .pipe(spyAdd1)
            .pipe(spyMul5)
            .pipe(spydiv2);

        expect(spyAdd1).to.not.have.been.called();
        expect(spyMul5).to.not.have.been.called();
        expect(spydiv2).to.not.have.been.called();
    });

    it('caching', () => {
        const spyAdd1 = spy(add1);
        const spyMul5 = spy(mul5);

        const pipeline = Pipeline.from(1)
            .pipe(spyAdd1)
            .pipe(spyMul5);

        const value1 = pipeline
            .pipe(add1)
            .end();
        const value2 = pipeline
            .pipe(div2)
            .end();

        expect(value1).to.be.equal(11);
        expect(value2).to.be.equal(5);

        expect(spyAdd1).to.have.been.called.once;
        expect(spyMul5).to.have.been.called.once;
    });

    it('usage as arguments', () => {
        function func(pipeline: Pipeline<number>) {
            return pipeline
                .pipe(add1)
                .pipe(String)
                .end();
        }

        const pipeline = Pipeline.from('5')
            .pipe(Number);

        const result = func(pipeline);

        expect(result).to.be.equal('6');
    })
});
