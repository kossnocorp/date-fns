import formatDistance from './_lib/formatDistance/index'
import formatRelative from './_lib/formatRelative/index'
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
declare var locale: {
  formatDistance: typeof formatDistance
  formatLong: {
    date: (dirtyOptions: any) => any
    time: (dirtyOptions: any) => any
    dateTime: (dirtyOptions: any) => any
  }
  formatRelative: typeof formatRelative
  localize: {
    ordinalNumber: (dirtyNumber: any, _dirtyOptions: any) => string
    era: (dirtyIndex: any, dirtyOptions: any) => any
    quarter: (dirtyIndex: any, dirtyOptions: any) => any
    month: (dirtyIndex: any, dirtyOptions: any) => any
    day: (dirtyIndex: any, dirtyOptions: any) => any
    dayPeriod: (dirtyIndex: any, dirtyOptions: any) => any
  }
  match: {
    ordinalNumber: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    era: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    quarter: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    month: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    day: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
    dayPeriod: (
      dirtyString: any,
      dirtyOptions: any
    ) => {
      value: any
      rest: string
    } | null
  }
  options: {
    weekStartsOn: number
    firstWeekContainsDate: number
  }
}
export default locale
