import Todo from './Todo.tsx'
import { TodosPropsInterface } from '../types/TodosProps.interface.ts'

const Todos = ({ todos = [], deleteTodo, toggleTodo }: TodosPropsInterface) => {
  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">Todos list is empty</p>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

export default Todos
