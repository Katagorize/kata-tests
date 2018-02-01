var path = require('path');
var expect = require('chai').expect;

var {findMostRepeated} = require(path.join(__dirname, '..', './findMostRepeated.js'));

describe('findMostRepeated()', function () {
  'use strict';
  it('Returns an empty data object when passed an empty array', () => {
    expect(findMostRepeated([])).to.eql({elements: [], repeats: null});
  });
  it('Returns an empty data object when passed an array of elements that don`t repeat', () => {
    const actual = findMostRepeated(['foo', 'bar', 'hello', 'world']);
    const expected = {elements: [], repeats: null};
    expect(actual).to.equal(expected);
  });
  it('Returns a data object with a single most repeated item when only a single item repeats', () => {
    const actual = findMostRepeated(['foo', 'foo', 'bar', 'hello', 'world']);
    const expected = {elements: ['foo'], repeats: 2};
    expect(actual).to.eql(expected);
  });
  it('Returns a data object of the most repeated items when passed an array with multiple repeating values', () => {
    const actual = findMostRepeated(['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo']);
    const exoected = {elements: ['foo', 'bar'], repeats: 3};
    expect(actual).to.eql(expected);
  });
});