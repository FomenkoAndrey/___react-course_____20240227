import { useEffect, useState } from 'react'
import { UserInterface } from './types/UserInterface.ts'
import { fetchData } from './utils/api.ts'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        console.log(error)
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleErrors()
  }, [])

  return (
    <div>
      {/*<h1>Users list</h1>*/}
      {/*{isLoading && <h2>Loading...</h2>}*/}
      {/*<ul>*/}
      {/*  {users.map((user: UserInterface) => (*/}
      {/*    <li key={user.id}>{user.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  )
}

export default App
