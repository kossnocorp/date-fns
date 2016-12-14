/**
 * @category Types
 * @summary An object passed as the last optional argument to all functions.
 *
 * @description
 * An object passed as the last optional argument to all functions.
 *
 * @typedef {Object} options
 * @property {Number} [weekStartsOn=0] - the index of the first day of the week (0 - Sunday).
 *   Used by `differenceInCalendarWeeks`, `endOfWeek`, `isSameWeek`,
 *   `isThisWeek`, `lastDayOfWeek`, `setDay`, and `startOfWeek`
 * @property {Number} [additionalDigits=2] - the additional number of digits in the extended year format.
 *   Options: 0, 1 or 2. Used by all functions that take String as Date-like argument.
 *   Internally, passed to `parse` to specify which way to convert extended year formatted String to Date.
 *   See [`parse`]{@link docs/parse}
 * @property {Object} [locale=enLocale] - the locale object.
 *   Used by `distanceInWords`, `distanceInWordsToNow`, `distanceInWordsStrict` and `format`
 * @param {String} [unit] - used by `distanceInWordsStrict`.
 *   If specified, will force a unit. Options: 's', 'm', 'h', 'd', 'M', 'Y'
 * @param {String} [partialMethod='floor'] - used by `distanceInWordsStrict`.
 *   Specifies, which way to round partial units. Options: 'floor', 'ceil', 'round'
 *
 * @example
 * // For 15 December 12345 AD, represent the start of the week in Esperanto,
 * // if the first day of the week is Monday:
 * var eoLocale = require('date-fns/locale/eo')
 * var options = {
 *   weekStartsOn: 1,
 *   additionalDigits: 1,
 *   locale: eoLocale
 * }
 * var result = format(startOfWeek('+12345-12-15', options), 'dddd, D MMMM YYYY', options)
 * //=> 'lundo, 10 decembro 12345'
 */
var options = {}

module.exports = options
