import Button from './components/Button.jsx'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>

      <Button text="Submit button" disabled />
      <Button text="Reset button" disabled={false} />
      <Button text="Button text" disabled={true} />
    </div>
  )
}

export default App
