import { TodoPropsInterface } from '../types/TodoProps.interface.ts'

const Todo = ({ todo }: TodoPropsInterface) => {
  console.log(todo)
  return (
    <div>
      <h2>
        {todo.id}. {todo.title}
      </h2>
    </div>
  )
}

export default Todo
