const SORT_KEYS = ['id', '-id', 'title', '-title']

export const isValidSortKey = (key: string | null): boolean => {
  return key !== null && SORT_KEYS.includes(key)
}
