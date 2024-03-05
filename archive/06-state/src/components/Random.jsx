import { useState } from 'react'
import randomizer from '../utils/randomizer.js'

const Random = ({ min, max }) => {
  const [num, setNum] = useState(randomizer(min, max))

  const generateRandom = () => {
    setNum(randomizer(min, max))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={generateRandom}>Generate random</button>
    </div>
  )
}

export default Random
