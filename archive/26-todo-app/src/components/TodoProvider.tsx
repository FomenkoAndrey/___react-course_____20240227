import { useState } from 'react'
import { TodoProviderPropsInterface } from '../types/TodoProviderProps.interface.ts'
import { TodoInterface } from '../types/Todo.interface.ts'
import { MOCK_TODOS } from '../data/mock-todos.ts'
import { TodoContext } from '../context/TodoContext.ts'

const TodoProvider = ({ children }: TodoProviderPropsInterface) => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const completedTodosCount: number = todos.filter((todo) => todo.completed).length

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        deleteAllTodos,
        clearCompletedTodos,
        completedTodosCount
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
