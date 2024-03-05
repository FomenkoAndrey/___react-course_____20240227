import MOCK_USERS from './data/mock-users.ts'
import { UserInterface } from './types/User.interface.ts'
import User from './components/User.tsx'

const users: UserInterface[] = MOCK_USERS

const App = () => {
  return (
    <div>
      {users.map((user: UserInterface) => {
        // #1
        // const { id, name, email, address } = user
        // return <User key={id} name={name} id={id} email={email} address={address}></User>

        // #2
        // return <User key={user.id} user={user} />

        // #3
        return <User key={user.id} {...user} />
      })}
    </div>
  )
}

export default App
