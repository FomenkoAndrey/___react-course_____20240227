import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <Counter count={count} />
      <Button onClick={incrementCount} text="Increment" />
      {!!count && <Button onClick={resetCount} text="Reset" />}
    </div>
  )
}

export default App
