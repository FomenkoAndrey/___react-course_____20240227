import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/not-found')
  }, [navigate])

  return (
    <div className="content-center">
      <h1 className="not-found">404</h1>
      <div className="link-xl">
        <Link to="../.." relative="path">
          Go to home page
        </Link>
      </div>
    </div>
  )
}

export default NotFound
