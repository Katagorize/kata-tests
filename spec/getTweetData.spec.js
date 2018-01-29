var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';

  it('exists', function () {
    expect(getTweetData).to.be.a('function');
  });
  it('takes a single tweet argument', function () {
    expect(getTweetData.length).to.equal(1);
  });
  it('Returns a non populated object for an empty string', () => {
    expect(getTweetData('')).to.eql({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 })
  })
  it('Returns an object only populated with length property if no other requirements are met', () => {
    expect(getTweetData("My awesome tweet")).to.eql({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
  })
  it('Returns mentions in the mentioned array and increaes mentionCount by 1 if passed', () => {
      expect(getTweetData("My awesome tweet to @northcoders")).to.eql({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32 })
  })
  it('Returns tags to the tags array and adds 1 to tagCount for each one found', () => {
    expect(getTweetData("My awesome tweet about #coding")).to.eql({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 30 })
  })
  it('Returns tags and mentions correctly when passed both', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).to.eql({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 46 })
  })
  it('Returns only unique hashtags and mentions', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).to.eql({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 62 })
  })
  it('Returns all instances of unique hashtags and mentions', () => {
    expect(getTweetData('#coding #code #northcoders #javascript #coding @northcoders @northcoders week2!')).to.eql({ tags: ["#coding", "#code", "#northcoders", "#javascript"], mentions: ["@northcoders"], tagCount: 4, mentionCount: 1, length: 79 })
  })
});
