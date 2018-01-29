var path = require('path');
var expect = require('chai').expect;

var {dnaPairs} = require(path.join(__dirname, '..', './dnaPairs.js'));

describe('dnaPairs()', function () {
  'use strict';

  it('If passed an emtpy string returns an empty array', function() {
    expect(dnaPairs('')).to.eql([]);
  });
  it('If passed a string without any base characters (ATGC) returns an empty string', () => {
    expect(dnaPairs('ZXU')).to.eql([]);
  });
  it('If passed only base characters correctly matches them with their pair', () => {
    expect(dnaPairs('G')).to.eql([['G','C']]);
    expect(dnaPairs('CT')).to.eql([['C','G'],['T','A']]);
    expect(dnaPairs('TGC')).to.eql([['T','A'],['G','C'],['C','G']]);
    expect(dnaPairs('ACTG')).to.eql([['A','T'],['C','G'],['T','A'],['G','C']]);
  });
  it('If passed a mixture of base case, random letters and upper and lower characters matches them with their pair', () => {
    expect(dnaPairs('s')).to.eql([]);
    expect(dnaPairs('S')).to.eql([]);
    expect(dnaPairs('Ss')).to.eql([]);
    expect(dnaPairs('SA')).to.eql([['A','T']]);
    expect(dnaPairs('SAhyTgGcC')).to.eql([['A','T'],['T','A'],['G','C'],['G','C'],['C','G'],['C','G']]);
  });
});
