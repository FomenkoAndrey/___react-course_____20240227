import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchSingleArticle } from '../../utils/api.ts'
import { Link, useParams } from 'react-router-dom'
import { useSortField } from '../hooks/useSortField.ts'

const SingleArticle = () => {
  const { id } = useParams()
  const { sortQuery } = useSortField()

  const [article, setArticle] = useState<ArticleInterface>()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchSingleArticle(`${id}`)
        setArticle(data)
      } catch (error: unknown) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataAndHandleErrors()
  }, [id])

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && article && (
        <>
          <h1>{article.title}</h1>
          <hr />
          <h3>{article.id}</h3>
          <h3>{article.slug}</h3>
          <hr />
          <p>{article.body}</p>
          <div className="link-xl">
            <Link to={`../..${sortQuery}`} relative="path">
              All articles
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleArticle
