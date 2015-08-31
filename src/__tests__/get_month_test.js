var getMonth = require('../get_month')

describe('getMonth', function() {
  it('returns month of given date', function() {
    var result = getMonth(new Date(2012, 1 /* Feb */, 29))
    expect(result).to.be.equal(1)
  })

  it('accepts string', function() {
    var result = getMonth(new Date(2014, 6 /* Jul */, 2).toISOString())
    expect(result).to.be.equal(6)
  })

  it('accepts timestamp', function() {
    var result = getMonth(new Date(2014, 3 /* Apr */, 2).getTime())
    expect(result).to.be.equal(3)
  })
})

