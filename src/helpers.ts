export function removeTrailingSlash(str: string) {
  return str.replace(/\/+$/, '')
}

export function formatDate(date: any) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
  return new Date(date).toLocaleDateString('en-US', options)
}
