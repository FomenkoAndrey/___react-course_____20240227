import Button from './Button.tsx'
import { RiCheckboxCircleLine, RiDeleteBin5Fill } from 'react-icons/ri'
import { ActionsPropsInterface } from '../types/ActionsProps.interface.ts'

const Actions = ({ deleteAllTodos, clearCompletedTodos, completedTodosExist }: ActionsPropsInterface) => {
  console.log(completedTodosExist)
  return (
    <div className="todos__actions">
      <Button title="Delete all Todos" onClick={deleteAllTodos}>
        <RiDeleteBin5Fill />
      </Button>
      <Button title="Clear completed Todos" onClick={clearCompletedTodos} disabled={!completedTodosExist}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
