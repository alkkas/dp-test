export const formatDate = (date: string) => {
  date = date.split('T')[0]
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}
