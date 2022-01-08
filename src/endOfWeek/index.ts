import type { LocaleOptions, WeekStartOptions } from '../types'

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param date - the original date
 * @param options - an object with options.
 * @returns the end of a week
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
export default function endOfWeek(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
): Date {
  const opts = options || {}

  const locale = opts.locale
  const localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  const defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : Math.trunc(localeWeekStartsOn)
  const weekStartsOn =
    opts.weekStartsOn == null
      ? defaultWeekStartsOn
      : Math.trunc(opts.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  const dateTransformed = new Date(date)
  const day = dateTransformed.getDay()
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  dateTransformed.setDate(dateTransformed.getDate() + diff)
  dateTransformed.setHours(23, 59, 59, 999)
  return dateTransformed
}
