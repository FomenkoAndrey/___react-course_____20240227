import { useContext, useEffect } from 'react'
import { SecondContext } from '../App.tsx'

const Second = () => {
  const { secondValue, setSecondValue } = useContext(SecondContext)

  // Щоб змінити стан secondValue при завантаженні компонента, ви можете використовувати хук useEffect. Цей хук приймає функцію, яка виконується після рендеринга компонента. Ви можете викликати setSecondValue в цій функції, щоб змінити стан secondValue при завантаженні компонента.
  useEffect(() => {
    setSecondValue('Нове значення при завантаженні')
  }, [setSecondValue])

  return <h2 style={{ color: 'red' }}>Second: {secondValue}</h2>
}

export default Second
