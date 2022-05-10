import assign from '../assign/index'

type FIXME = any
export type Options = FIXME

const defaultOptions: Options = {
  weekStartsOn: 0,
  firstWeekContainsDate: 4,
}

export function getDefaultOptions(): Options {
  return defaultOptions
}

export function setDefaultOptions(options: Options): void {
  assign(defaultOptions, options)
}
