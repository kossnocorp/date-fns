// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import max from '.'

describe('max', function () {
  it('returns the latest date', function () {
    var result = max(
      [
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('allows to pass more than 2 arguments', function () {
    var result = max(
      [
        new Date(1987, 1 /* Feb */, 11),
        new Date(1989, 6 /* Jul */, 10),
        new Date(1995, 6 /* Jul */, 2),
        new Date(1990, 0 /* Jan */, 1)
      ]
    )
    assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2))
  })

  it('accepts strings', function () {
    var result = max(
      [
        new Date(1987, 1 /* Feb */, 11).toISOString(),
        new Date(1989, 6 /* Jul */, 10).toISOString()
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('accepts timestamps', function () {
    var result = max(
      [
        new Date(1989, 6 /* Jul */, 10).getTime(),
        new Date(1987, 1 /* Feb */, 11).getTime()
      ]
    )
    assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('returns `Invalid Date` if any given date is invalid', function () {
    var result = max([
      new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if any given value is undefined', function () {
    var result = max([
      new Date(1989, 6 /* Jul */, 10),
      undefined,
      new Date(1987, 1 /* Feb */, 11)
    ])
    assert(result instanceof Date && isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined`', function () {
    var block = max.bind(
      null,
      [
        new Date(1989, 6 /* Jul */, 10),
        new Date(1987, 1 /* Feb */, 11)
      ],
      {additionalDigits: NaN}
    )
    assert.throws(block, RangeError)
  })
})
