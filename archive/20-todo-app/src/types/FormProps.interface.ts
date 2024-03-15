import { TodoItemInterface } from './TodoItemInterface.ts'

export interface FormPropsInterface {
  addTodo: (todo: TodoItemInterface) => void
}
