var toDate = require('../../../to_date/index.js')

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, options) {
  var weekStartsOn = 1

  var date = toDate(dirtyDate, options)
  var day = date.getUTCDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}

module.exports = startOfUTCISOWeek
