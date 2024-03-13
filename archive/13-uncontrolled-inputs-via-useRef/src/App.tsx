import LoginFormRef from './components/LoginFormRef.tsx'

const App = () => {
  return (
    <div className="container">
      <h1 className="my-5">Uncontrolled Inputs</h1>
      {/*<LoginForm />*/}
      <LoginFormRef />
    </div>
  )
}

export default App
