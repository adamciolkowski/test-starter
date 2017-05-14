import add from './add';

describe(__filename, () => {
    it('2 + 2 = 4', () => {
        expect(add(2, 2)).to.equal(4);
    })
});
