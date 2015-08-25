/**
 * Adds specified number of seconds to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount of seconds
 * @returns {date} new date
 */
var addSeconds = function(dirtyDate, amount) {
  var date = new Date(dirtyDate)
  date.setSeconds(date.getSeconds() + amount)
  return date
}

module.exports = addSeconds

