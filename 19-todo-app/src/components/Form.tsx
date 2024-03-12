import { ChangeEvent, FormEvent, useState } from 'react'

const Form = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(title)
    // todo: add new todo to the todos array
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo..." value={title} onChange={handleInputChange} />
      <button type="submit">Save</button>
    </form>
  )
}

export default Form
