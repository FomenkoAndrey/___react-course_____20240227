import { TodoItemInterface } from './TodoItemInterface.ts'

export interface TodoPropsInterface {
  todo: TodoItemInterface
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}
