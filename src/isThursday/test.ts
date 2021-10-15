/* eslint-env mocha */

import assert from 'assert'
import isThursday from '.'

describe('isThursday', () => {
  it('returns true if the given date is Thursday', () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 25))
    assert(result)
  })

  it('returns false if the given date is not Thursday', () => {
    const result = isThursday(new Date(2014, 8 /* Sep */, 24))
    assert(!result)
  })

  it('accepts a timestamp', () => {
    const result = isThursday(new Date(2014, 1 /* Feb */, 13).getTime())
    assert(result)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isThursday(new Date(NaN))
    assert(!result)
  })
})
