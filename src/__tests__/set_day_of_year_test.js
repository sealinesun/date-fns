var setDayOfYear = require('../set_day_of_year');

describe('setDayOfYear', function() {
  it('sets day of year', function() {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2);
    expect(result).to.be.eql(new Date(2014, 0 /* Jan */, 2));
  });

  it('accepts string', function() {
    var result = setDayOfYear(new Date(2014, 6 /* Jul */, 2).toISOString(), 60);
    expect(result).to.be.eql(new Date(2014, 2 /* Mar */, 1));
  });

  it('do not mutates original date', function() {
    var date = new Date(2014, 6 /* Jul */, 2);
    setDayOfYear(date, 365);
    expect(date).to.be.eql(new Date(2014, 6 /* Jul */, 2));
  });
});

