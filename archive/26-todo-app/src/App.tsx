import TodoProvider from './components/TodoProvider.tsx'
import Form from './components/Form.tsx'
import TodoActions from './components/TodoActions.tsx'
import Todos from './components/Todos.tsx'

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <TodoActions />
        <Todos />
      </div>
    </TodoProvider>
  )
}

export default App
