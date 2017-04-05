import toDate from '../toDate/index.js'
import isLeapYear from '../isLeapYear/index.js'

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of days in a year
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export default function getDaysInYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)

  if (isNaN(date)) {
    return NaN
  }

  return isLeapYear(date, dirtyOptions) ? 366 : 365
}
