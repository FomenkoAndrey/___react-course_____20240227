import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions.ts'
import { CounterState } from '../redux/types.ts'

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
