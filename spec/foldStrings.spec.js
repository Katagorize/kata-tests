var expect = require('chai').expect;
var {foldString} = require('../foldStrings');

describe('foldString()', function () {
  it('Returns an empty string when passed an empty string', function() {
    expect(foldString('')).to.equal('');
  });
  it('Returns the input string if passed a string of only two characters', () => {
    expect(foldString('ab')).to.equal('ab');
  });
  it('Returns folded string when passed a string of odd length', () => {
    expect(foldString('abc')).to.equal('abc');
    expect(foldString('abcde')).to.equal('baced');
    expect(foldString('Northcoders')).to.equal('htroNcsredo')
  });
  it('Returns folded string when passed a string of even length', () => {
    expect(foldString('code')).to.equal('oced');
    expect(foldString('javascript')).to.equal('savajtpirc')
  });
  it('Returns an empty string if passed an invalid input', () => {
    expect(foldString([1,1,1]));
  })
});
