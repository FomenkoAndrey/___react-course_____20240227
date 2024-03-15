import { TodoItemInterface } from './TodoItemInterface.ts'

export interface TodosPropsInterface {
  todos: TodoItemInterface[]
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}
