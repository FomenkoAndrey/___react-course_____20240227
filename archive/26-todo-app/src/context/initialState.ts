import { TodoContextInterface } from '../types/TodoContext.interface.ts'

export const initialState: TodoContextInterface = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  deleteAllTodos: () => {},
  clearCompletedTodos: () => {},
  completedTodosCount: 0
}
