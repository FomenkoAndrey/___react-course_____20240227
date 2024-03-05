import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'

const textArr = ['Increment', 'Add one', 'Count', 'Increase']

const App = () => {
  const [count, setCount] = useState(0)

  console.log('App render')

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Counter count={count} />
      {/*<Button onClick={incrementCount} text="Increment" />*/}
      {/*<Button onClick={incrementCount} text="Add one" />*/}
      {/*<Button onClick={incrementCount} text="Count" />*/}
      {/*<Button onClick={incrementCount} text="Increase" />*/}

      {/*<Button onClick={incrementCount} text={textArr[0]} />*/}
      {/*<Button onClick={incrementCount} text={textArr[1]} />*/}
      {/*<Button onClick={incrementCount} text={textArr[2]} />*/}
      {/*<Button onClick={incrementCount} text={textArr[3]} />*/}

      {textArr.map((text, index) => (
        <Button onClick={incrementCount} text={text} key={index} />
      ))}
    </div>
  )
}

export default App
