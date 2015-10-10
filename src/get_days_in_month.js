var parse = require('./parse')

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} number of days in a month
 */
var getDaysInMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  return new Date(year, monthIndex + 1, 0).getDate()
}

module.exports = getDaysInMonth

