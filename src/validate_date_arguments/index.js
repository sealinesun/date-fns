var isValid = require('../is_valid')

/**
 * @category Common Helpers
 * @summary Does the date constructed from the given arguments exist?
 *
 * @description
 * Validates that the given Date constructor arguments are within acceptable ranges,
 * e. g. the hour value should be within range [0..23], the second value within [0..59] etc.
 *
 * @param {Number} year - the year of the date
 * @param {Number} month - the month of the date
 * @param {Number} [day=1] - the day of the month of the date
 * @param {Number} [hours=0] - the hours of the date
 * @param {Number} [minutes=0] - the minutes of the date
 * @param {Number} [seconds=0] - the seconds of the date
 * @param {Number} [milliseconds=0] - the milliseconds of the date
 * @returns {Boolean} all arguments are valid
 *
 * @example
 * // For the existing date:
 * var result = validateDateArguments(2014, 1, 28, 12, 0)
 * //=> true
 *
 * @example
 * // For the impossible date (29 February of non-leap year):
 * var result = validateDateArguments(2014, 1, 29, 12, 0)
 * //=> false
 */
function validateDateArguments (year, month, day, hours, minutes, seconds, milliseconds) {
  if (year >= 0 && year < 100) {
    year = 1900 + year
  }

  day = day || 1
  hours = hours || 0
  minutes = minutes || 0
  seconds = seconds || 0
  milliseconds = milliseconds || 0

  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds)

  /* eslint-disable eqeqeq */
  return isValid(date) &&
    date.getFullYear() == year &&
    date.getMonth() == month &&
    date.getDate() == day &&
    date.getHours() == hours &&
    date.getMinutes() == minutes &&
    date.getSeconds() == seconds &&
    date.getMilliseconds() == milliseconds
  /* eslint-enable eqeqeq */
}

module.exports = validateDateArguments
