var startOfDay = require('../start_of_day');

describe('startOfDay', function() {
  it('returns date with time setted to 00:00:00', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* starts from 0 */, 2, 0, 0, 0, 0)
    );
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* starts from 0 */, 2, 0, 0, 0, 0)
    );
  });

  it('accepts timestamp', function() {
    var date = new Date('2014-09-02T11:55:00').getTime();
    var result = startOfDay(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* starts from 0 */, 2, 0, 0, 0, 0)
    );
  });

  it('does not mutate original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    startOfDay(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });
});

