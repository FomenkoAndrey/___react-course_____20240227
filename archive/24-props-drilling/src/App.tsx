import Level1 from './components/Level1.tsx'

const App = () => {
  const propValue = 'Hello PROPS Drilling!'

  return (
    <div>
      <h1>App Component</h1>
      <Level1 value={propValue} />
    </div>
  )
}

export default App
