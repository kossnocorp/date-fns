import requiredArgs from '../_lib/requiredArgs/index'

export default function millisecondsToSeconds(milliseconds: number): number

/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a number of seconds.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1000 miliseconds to seconds
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 */

export default function millisecondsToSeconds(milliseconds: number): number {
  requiredArgs(1, arguments)
  // milliseconds in 1 seconds => 1000;
  const seconds = milliseconds / 1000
  return Math.floor(seconds)
}