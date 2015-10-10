var startOfDay = require('./start_of_day')

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * Is the given date today?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is today
 */
var isToday = function(dirtyDate) {
  return startOfDay(dirtyDate).getTime() == startOfDay(new Date()).getTime()
}

module.exports = isToday

