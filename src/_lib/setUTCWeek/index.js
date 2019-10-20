import toInteger from '../toInteger/index.js'
import toDate from '../../toDate/index.js'
import getUTCWeek from '../getUTCWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  const date = toDate(dirtyDate)
  const week = toInteger(dirtyWeek)
  const diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
