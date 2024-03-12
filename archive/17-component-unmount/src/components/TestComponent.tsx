import { useEffect, useState } from 'react'

const TestComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log('TestComponent did mount and update') // [count] ~ componentDidMount, componentDidUpdate
    console.log('TestComponent did mount') // [] ~ componentDidMount

    return () => {
      console.log('TestComponent will unmount') // componentWillUnmount
    }
  }, [])

  return (
    <div>
      <h1>Component lifecycle</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default TestComponent
