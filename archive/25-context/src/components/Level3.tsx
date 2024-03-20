import { useContext } from 'react'
import { PropContext, SecondContext } from '../App.tsx'

const Level3 = () => {
  const { value } = useContext(PropContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)

  const handleChange = () => {
    setSecondValue('Нове значення при натисканні на кнопку')
  }

  return (
    <div>
      <h4>Level3: {value}</h4>
      <h4 style={{ color: 'red' }}>Level3: {secondValue}</h4>
      <button onClick={handleChange}>Змінити secondValue</button>
    </div>
  )
}

export default Level3
