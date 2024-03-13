import { useEffect, useState } from 'react'
import { UserInterface } from './types/UserInterface.ts'
import { fetchData } from './utils/api.ts'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [id, setId] = useState(5)

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchData(id)
        setUsers(data)
        console.log(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleErrors()
  }, [id])

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      {!isLoading && !error && users.length && (
        <ul>
          {users.map((user: UserInterface) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
