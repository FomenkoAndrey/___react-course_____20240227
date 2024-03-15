import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FormPropsInterface } from '../types/FormProps.interface.ts'
import Button from './Button.tsx'

const Form = ({ addTodo }: FormPropsInterface) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTodo({
      id: uuidv4(),
      title,
      completed: false
    })
    setTitle('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo..." value={title} onChange={handleInputChange} />
      <Button type="submit">Save</Button>
    </form>
  )
}

export default Form
