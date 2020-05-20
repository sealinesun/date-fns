import toInteger from '../toInteger/index.js'
import toDate from '../../toDate/index.js'
import getUTCWeek from '../getUTCWeek/index.js'
import requiredArgs from '../requiredArgs/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCWeek(
  dirtyDate: Date | number,
  dirtyWeek: number,
  options
): Date {
  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
