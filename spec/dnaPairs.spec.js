var path = require('path');
var expect = require('chai').expect;

var {dnaPairs} = require(path.join(__dirname, '..', './dnaPairs.js'));

describe('dnaPairs()', function () {
  'use strict';

  it('Returns an empty array when passed an empty string', function() {
    expect(dnaPairs('')).to.eql([]);
  });
  it('Returns an empty string when passed a string without any base characters (ATGC)', () => {
    expect(dnaPairs('ZXU')).to.eql([]);
  });
  it('Returns matched pairs when passed only base characters', () => {
    expect(dnaPairs('G')).to.eql([['G','C']]);
    expect(dnaPairs('CT')).to.eql([['C','G'],['T','A']]);
    expect(dnaPairs('TGC')).to.eql([['T','A'],['G','C'],['C','G']]);
    expect(dnaPairs('ACTG')).to.eql([['A','T'],['C','G'],['T','A'],['G','C']]);
  });
  it('Returns an array of matched pairs when passed a mixture of base characters and random letters of varying case', () => {
    expect(dnaPairs('s')).to.eql([]);
    expect(dnaPairs('S')).to.eql([]);
    expect(dnaPairs('Ss')).to.eql([]);
    expect(dnaPairs('SA')).to.eql([['A','T']]);
    expect(dnaPairs('SAhyTgGcC')).to.eql([['A','T'],['T','A'],['G','C'],['G','C'],['C','G'],['C','G']]);
  });
  it('Returns an array of matched pairs when passed valid a string of characters with spaces', () => {
    expect(dnaPairs('SA h yT gG cC')).to.eql([['A','T'],['T','A'],['G','C'],['G','C'],['C','G'],['C','G']]);    
  });
  it('Returns an empty array when passed a string of non-base characters', () => {
    expect(dnaPairs('4567890')).to.eql([]);
    expect(dnaPairs('QQQQQXZZZ')).to.eql([]);
    expect(dnaPairs('Sh2yGf2vbn6N')).to.eql([]);
  });
  it('Returns an empty array when passed an invalid input', () => {
    expect(dnaPairs([])).to.eql([]);
    expect(dnaPairs({})).to.eql([]);
    expect(dnaPairs(0)).to.eql([]);
    expect(dnaPairs(true)).to.eql([]);
    expect(dnaPairs(false)).to.eql([]);
    expect(dnaPairs(null)).to.eql([]);
  });
});
