import { FormEvent, useRef } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('username', usernameRef.current?.value)
    console.log('password', passwordRef.current?.value)
  }

  return (
    <form onSubmit={handleFormSubmit} className="col-5">
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          ref={usernameRef}
          className="form-control"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          className="form-control"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  )
}

export default LoginForm
