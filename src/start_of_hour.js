/**
 * Returns start of an hour for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfHour = function(dirtyDate) {
  var date = new Date(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
};

module.exports = startOfHour;

