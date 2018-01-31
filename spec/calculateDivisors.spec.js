let expect = require('chai').expect;
const {calculateDivisors} = require(`../calculateDivisors.js`);


describe('calculateDivisors()', function (){
'use strict';

    it('will return 0 if the number passed to the function is < 2', function () {
        expect(calculateDivisors(1)).to.equal(0);
        expect(calculateDivisors(2)).to.equal(0);
        expect(calculateDivisors(3)).to.equal(0);
    });

    it('will return three if the number passed to the function is 5', function () {
        expect(calculateDivisors(5)).to.equal(3);
    });

    it('will return 8 if the number is 6', function () {
        expect(calculateDivisors(6)).to.equal(8); 
    });

    it('will return 23 if the number is 10', function () {
        expect(calculateDivisors(10)).to.equal(23); 
    });

    it('will return 33 if the number is 12', function () {
        expect(calculateDivisors(12)).to.equal(33);
    });
})
