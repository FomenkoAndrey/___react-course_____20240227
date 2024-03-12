import TestComponent from './components/TestComponent.tsx'
import { useState } from 'react'

const App = () => {
  const [showComponent, setShowComponent] = useState(true)

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div>
      <button onClick={toggleComponent}>{showComponent ? 'Hide' : 'Show'}</button>
      {showComponent && <TestComponent />}
    </div>
  )
}

export default App
