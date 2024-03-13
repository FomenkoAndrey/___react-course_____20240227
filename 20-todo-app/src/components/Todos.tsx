import Todo from './Todo.tsx'
import { TodosPropsInterface } from '../types/TodosProps.interface.ts'

const Todos = ({ todos = [] }: TodosPropsInterface) => {
  return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
}

export default Todos
