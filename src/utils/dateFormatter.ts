export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString)
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  return ` ${day} ${month}, ${year}`
}
