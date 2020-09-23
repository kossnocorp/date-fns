import compareAsc from '../compareAsc/index'
import differenceInYears from '../differenceInYears/index'
import differenceInMonths from '../differenceInMonths/index'
import differenceInWeeks from '../differenceInWeeks/index'
import differenceInDays from '../differenceInDays/index'
import differenceInHours from '../differenceInHours/index'
import differenceInMinutes from '../differenceInMinutes/index'
import differenceInSeconds from '../differenceInSeconds/index'
import isValid from '../isValid/index'
import requiredArgs from '../_lib/requiredArgs/index'
import toDate from '../toDate/index'
import sub from '../sub/index'

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {TypeError} `showWeeks` must be boolean type
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 *
 * // Get the duration between January 15, 1929 and April 4, 1968 counting weeks.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0),
 *   showWeeks: true,
 * })
 * // => { years: 39, months: 2, weeks:2,  days: 6, hours: 7, minutes: 5, seconds: 0 }
 */

export default function intervalToDuration({ start, end, showWeeks = false }) {
  requiredArgs(1, arguments)

  const dateLeft = toDate(start)
  const dateRight = toDate(end)

  if (!isValid(dateLeft)) {
    throw new RangeError('Start Date is invalid')
  }
  if (!isValid(dateRight)) {
    throw new RangeError('End Date is invalid')
  }
  if (showWeeks !== true && showWeeks !== false) {
    throw new TypeError('ShowWeeks is invalid')
  }

  let duration
  if (showWeeks) {
    duration = {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  } else {
    duration = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const sign = compareAsc(dateLeft, dateRight)

  duration.years = Math.abs(differenceInYears(dateLeft, dateRight))

  const remainingMonths = sub(dateLeft, { years: sign * duration.years })
  duration.months = Math.abs(differenceInMonths(remainingMonths, dateRight))

  let remainingDays

  if (showWeeks) {
    const remainingWeeks = sub(remainingMonths, {
      months: sign * duration.months
    })
    duration.weeks = Math.abs(differenceInWeeks(remainingWeeks, dateRight))
    remainingDays = sub(remainingWeeks, { weeks: sign * duration.weeks })
    duration.days = Math.abs(differenceInDays(remainingDays, dateRight))
  } else {
    remainingDays = sub(remainingMonths, { months: sign * duration.months })
    duration.days = Math.abs(differenceInDays(remainingDays, dateRight))
  }

  const remainingHours = sub(remainingDays, { days: sign * duration.days })
  duration.hours = Math.abs(differenceInHours(remainingHours, dateRight))

  const remainingMinutes = sub(remainingHours, { hours: sign * duration.hours })
  duration.minutes = Math.abs(differenceInMinutes(remainingMinutes, dateRight))

  const remainingSeconds = sub(remainingMinutes, {
    minutes: sign * duration.minutes
  })
  duration.seconds = Math.abs(differenceInSeconds(remainingSeconds, dateRight))

  return duration
}
