import buildDistanceInWordsLocale from './build_distance_in_words_locale/index.js'
import buildFormatLocale from './build_format_locale/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Icelandic locale.
 * @author Derek Blank [@derekblank]{@link https://github.com/derekblank}
 */
const isLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

export default isLocale
