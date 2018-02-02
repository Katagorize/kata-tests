let expect = require('chai').expect;
let {pigLatin} = require(`../pigLatin.js`);

describe('pigLatin()', function () {
    'use strict';

    it('Appends "way" when passed a single word string beginning with a vowel', function () {
		expect(pigLatin('a')).to.equal('away');
		expect(pigLatin('algorithm')).to.equal('algorithmway');
    });
    
    it('Moves the first consonant to the end of the string and append "ay"', function () {
		expect(pigLatin('sheffield')).to.equal('effieldshay');
    });
    
    it('Pushes consecutive consonants to the end of the string and append "ay"', function () {
		expect(pigLatin('cat')).to.equal('atcay');
    });
    
    it('Converts multiple word strings to pig latin', function () {
		expect(pigLatin('keep on coding')).to.equal('eepkay onway odingcay');
	});
})
