import toDate from '../../../to_date/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISODay (dirtyDate, day, options) {
  if (day % 7 === 0) {
    day = day - 7
  }

  var weekStartsOn = 1
  var date = toDate(dirtyDate, options)
  var currentDay = date.getUTCDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
