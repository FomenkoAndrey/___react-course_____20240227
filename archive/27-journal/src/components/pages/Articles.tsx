import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchArticles } from '../../utils/api.ts'
import { Link } from 'react-router-dom'
import { useSortField } from '../hooks/useSortField.ts'
import { generateTitle } from '../../utils/generateTitle.ts'
import { isValidSortKey } from '../../utils/isValidSortKey.ts'
import SortBlock from '../common/SortBlock.tsx'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { sortKey, sortQuery } = useSortField()

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchArticles(isValidSortKey(sortKey) ? sortKey : null)
        setArticles(data)
      } catch (error: unknown) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataAndHandleErrors()
  }, [sortKey])

  return (
    <div>
      <SortBlock />
      <h1>Articles{generateTitle(sortKey)}</h1>
      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!isLoading &&
          !error &&
          articles.map(({ id, title, slug }: ArticleInterface) => (
            <h2 key={id}>
              {/*<Link to={`${slug}`} state={{ id }}>*/}
              <Link to={`${slug}/${id}${sortQuery}`} state={{ id }}>
                {title}
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
