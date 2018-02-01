let expect = require('chai').expect;
const {calculateDivisors} = require(`../calculateDivisors.js`);


describe('calculateDivisors()', function (){
'use strict';

    it('Returns 0 if given a number less than 2', function () {
        expect(calculateDivisors(1)).to.equal(0);
        expect(calculateDivisors(2)).to.equal(0);
        expect(calculateDivisors(3)).to.equal(0);
    });

    it('Returns 3 if passed 5', function () {
        expect(calculateDivisors(5)).to.equal(3);
    });

    it('Returns 8 if passed 6', function () {
        expect(calculateDivisors(6)).to.equal(8); 
    });

    it('Returns 23 if passed 10', function () {
        expect(calculateDivisors(10)).to.equal(23); 
    });

    it('Returns 33 if passed 12', function () {
        expect(calculateDivisors(12)).to.equal(33);
    });
})
