import { useEffect, useState } from 'react'
import { UserInterface } from './types/UserInterface.ts'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
