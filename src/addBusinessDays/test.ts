// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addBusinessDays from '.'

describe('addBusinessDays', () => {
  it('adds the given number of business days', () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('handles negative amount', () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 15), -10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns the Monday when 1 day is added on the Friday', () => {
    assert.deepEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 10), 1), // Friday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  it('returns the Monday when 1 day is added on the Satuday', () => {
    assert.deepEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 11), 1), // Saturday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  it('returns the Monday when 1 day is added on the Sunday', () => {
    assert.deepEqual(
      addBusinessDays(new Date(2020, 0 /* Jan */, 12), 1), // Sunday
      new Date(2020, 0 /* Jan */, 13) // Monday
    )
  })

  it('can handle a large number of business days', () => {
    const result = addBusinessDays(new Date(2014, 0 /* Jan */, 1), 3387885)
    assert.deepEqual(result, new Date(15000, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1)
    addBusinessDays(date, 11)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addBusinessDays(new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
