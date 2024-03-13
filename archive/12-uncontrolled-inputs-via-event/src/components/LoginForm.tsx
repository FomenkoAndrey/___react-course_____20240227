import { FormEvent } from 'react'

const LoginForm = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }
    
    console.log('username', target.username.value)
    console.log('password', target.password.value)
  }

  return (
    <form onSubmit={handleFormSubmit} className="col-5">
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input className="form-control" id="username" type="text" placeholder="Username" name="username" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input className="form-control" id="password" type="text" placeholder="Password" name="password" />
      </div>
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  )
}

export default LoginForm
