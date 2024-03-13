import { FormEvent, useState } from 'react'

interface FormDataInterface {
  username: string
  password: string
}

const initialFormData: FormDataInterface = {
  username: '',
  password: ''
}

const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (fieldName: string, fieldValue: string) => {
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  return (
    <form onSubmit={handleFormSubmit} className="col-5">
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-control"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          id="password"
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  )
}

export default LoginForm
