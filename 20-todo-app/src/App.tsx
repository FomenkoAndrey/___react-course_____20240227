import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import { useState } from 'react'
import { MOCK_TODOS } from './data/mock-todos.ts'
import { TodoInterface } from './types/Todo.interface.ts'

const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  return (
    <div>
      <h1>Todo App</h1>
      <Form />
      <Todos todos={todos} />
    </div>
  )
}

export default App
