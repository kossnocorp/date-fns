// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addISOWeekYears from '.'

describe('utc/addISOWeekYears', function () {
  it('adds the given number of ISO week-numbering years', function () {
    var result = addISOWeekYears(new Date(Date.UTC(2010, 6 /* Jul */, 2)), 5)
    assert.deepEqual(result, new Date(Date.UTC(2015, 5 /* Jun */, 26)))
  })

  it('accepts a string', function () {
    var result = addISOWeekYears(new Date(Date.UTC(2014, 8 /* Sep */, 1)).toISOString(), 12)
    assert.deepEqual(result, new Date(Date.UTC(2026, 7 /* Aug */, 31)))
  })

  it('accepts a timestamp', function () {
    var result = addISOWeekYears(Date.UTC(2014, 8 /* Sep */, 1), 12)
    assert.deepEqual(result, new Date(Date.UTC(2026, 7 /* Aug */, 31)))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = addISOWeekYears(new Date(Date.UTC(2010, 6 /* Jul */, 2)), '5')
    assert.deepEqual(result, new Date(Date.UTC(2015, 5 /* Jun */, 26)))
  })

  it('does not mutate the original date', function () {
    var date = new Date(Date.UTC(2014, 8 /* Sep */, 1))
    addISOWeekYears(date, 12)
    assert.deepEqual(date, new Date(Date.UTC(2014, 8 /* Sep */, 1)))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(10, 6 /* Jul */, 2)
    initialDate.setUTCHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setUTCFullYear(15, 5 /* Jun */, 26)
    expectedResult.setUTCHours(0, 0, 0, 0)
    var result = addISOWeekYears(initialDate, 5)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = addISOWeekYears(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = addISOWeekYears(new Date(Date.UTC(2010, 6 /* Jul */, 2)), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = addISOWeekYears.bind(null, new Date(Date.UTC(2010, 6 /* Jul */, 2)), 5, {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(addISOWeekYears.bind(null), TypeError)
    assert.throws(addISOWeekYears.bind(null, 1), TypeError)
  })
})
