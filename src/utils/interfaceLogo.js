/**
 * Logo URLs are owned by Core's interface settings. A blank value means
 * "nothing configured", but every non-empty URL — including the built-in
 * /static/img/... paths — must be rendered as-is. Guessing "default" from the
 * URL used to swap in a bundled asset, which made server-side logo changes
 * invisible in the UI.
 */
export function normalizeInterfaceLogo(value, fallback = '') {
  const url = typeof value === 'string' ? value.trim() : ''
  return url || fallback
}

export function hasInterfaceLogo(value) {
  return Boolean(typeof value === 'string' ? value.trim() : '')
}
