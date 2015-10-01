var parse = require('./parse')

/**
 * Return the latest of the given dates.
 * @param {...Date|String|Number} list of dates
 * @returns {Date} latest of the dates
 */
var max = function() {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function(dirtyDate) {
    return parse(dirtyDate)
  })
  var latestDirtyDate = Math.max.apply(null, dates)
  return new Date(latestDirtyDate)
}

module.exports = max

