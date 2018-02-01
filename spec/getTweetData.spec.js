var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';
  it('Takes a single argument', function () {
    expect(getTweetData.length).to.equal(1);
  });
  it('Returns a non populated tweet-data object when passed an empty string', () => {
    expect(getTweetData('')).to.eql({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 })
  })
  it('Returns a tweet-object with length populated when passed a string with no tags or mentions', () => {
    expect(getTweetData("My awesome tweet")).to.eql({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
  })
  it('Returns a tweet-data object updated with 1 mention when passed a string with 1 mention', () => {
      expect(getTweetData("My awesome tweet to @northcoders")).to.eql({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32 })
  })
  it('Returns a tweet-data object updated with 1 tag when passed a string with 1 tag', () => {
    expect(getTweetData("My awesome tweet about #coding")).to.eql({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 30 })
  })
  it('Returns a tweet-data object updated with tags and mentions correctly when passed a string with both', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).to.eql({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 46 })
  })
  it('Only counts unique tags and mentions', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).to.eql({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 62 })
  })
  it('Returns all instances of unique hashtags and mentions', () => {
    expect(getTweetData('#coding #code #northcoders #javascript #coding @northcoders @northcoders week2!')).to.eql({ tags: ["#coding", "#code", "#northcoders", "#javascript"], mentions: ["@northcoders"], tagCount: 4, mentionCount: 1, length: 79 })
  })
});
