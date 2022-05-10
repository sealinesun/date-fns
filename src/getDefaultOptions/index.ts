import {
  getDefaultOptions as getInternalDefaultOptions,
  Options,
} from '../_lib/defaults/defaultOptions'
import defaultLocale from '../_lib/defaults/defaultLocale'
import assign from '../_lib/assign/index'

export default function getDefaultOptions(): Options {
  const internalDefaultOptions = getInternalDefaultOptions()
  if (internalDefaultOptions.locale) {
    return assign({}, internalDefaultOptions)
  }

  return assign({ locale: defaultLocale }, internalDefaultOptions)
}
