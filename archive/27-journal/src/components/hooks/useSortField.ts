import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const useSortField = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const sortKey = query.sort?.toString() || null
  const sortQuery = `${sortKey ? `?sort=${sortKey}` : ''}`

  console.log('location', location)
  console.log('query', query)
  console.log('sortField', sortKey)
  console.log('sortQuery', sortQuery)
  return { sortKey, sortQuery }
}
