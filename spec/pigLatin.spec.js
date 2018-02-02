let expect = require('chai').expect;
let { pigLatin } = require(`../pigLatin.js`);

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
  it('Ignores non alphabet words in a string of words with spaces', () => {
    expect(pigLatin('keep 89 on 11 coding')).to.equal('eepkay 89 onway 11 odingcay');
  })
  it('Returns an empty String when passed an invalid input', () => {
    expect(dnaPairs([])).to.eql('');
    expect(dnaPairs({})).to.eql('');
    expect(dnaPairs(0)).to.eql('');
    expect(dnaPairs(true)).to.eql('');
    expect(dnaPairs(false)).to.eql('');
    expect(dnaPairs(null)).to.eql('');
  });
})
