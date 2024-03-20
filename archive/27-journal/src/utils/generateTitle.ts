export const generateTitle = (sortField: string | null): string => {
  if (sortField) {
    const fieldName: string = sortField.startsWith('-') ? sortField.slice(1) : sortField
    const order: string = sortField.startsWith('-') ? 'descending' : 'ascending'
    return ` sorted by ${fieldName}, ${order}`
  }

  return ''
}
