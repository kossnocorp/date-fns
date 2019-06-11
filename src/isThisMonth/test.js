// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import isThisMonth from '.'

describe('isThisMonth', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same month (and year)', () => {
    var date = new Date(2014, 8 /* Sep */, 15)
    assert(isThisMonth(date) === true)
  })

  it('returns false if the given date and the current date have different months', () => {
    var date = new Date(2013, 7 /* Aug */, 31)
    assert(isThisMonth(date) === false)
  })

  it('accepts a timestamp', () => {
    var date = new Date(2014, 8 /* Sep */, 30).getTime()
    assert(isThisMonth(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThisMonth.bind(null), TypeError)
  })
})