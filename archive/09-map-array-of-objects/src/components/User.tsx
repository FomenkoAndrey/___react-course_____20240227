import { UserInterface } from '../types/User.interface.ts'

const User = ({ id, name, username, email, address }: UserInterface) => {
  return (
    <div>
      <h2>
        {id}. {name}
      </h2>
      <p>{username}</p>
      <p>{email}</p>
      <p>{address}</p>
    </div>
  )
}

export default User
