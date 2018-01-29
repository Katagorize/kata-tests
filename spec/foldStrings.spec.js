var expect = require('chai').expect;
var {foldString} = require('../foldStrings');

describe('foldString()', function () {
  it('Expect empty string to be returned if passed empty string', function() {
    expect(foldString('')).to.equal('');
  });
  it('Expects a string of only two characters to return the string', () => {
    expect(foldString('ab')).to.equal('ab');
  });
  it('Expects an odd length string to place its outer and inner letters either side of the middle letter', () => {
    expect(foldString('abc')).to.equal('abc');
    expect(foldString('abcde')).to.equal('baced');
    expect(foldString('Northcoders')).to.equal('htroNcsredo')
  });
  it('Expect even length string to move all letters', () => {
    expect(foldString('code')).to.equal('oced');
    expect(foldString('javascript')).to.equal('savajtpirc')
  });
  it('Returns and empty string if passed an invalid input', () => {
    expect(foldString([1,1,1]));
  })
});
