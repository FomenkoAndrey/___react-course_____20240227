import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store.ts'
import { decrementAsync, incrementAsync } from '../redux/counterSlice.ts'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(incrementAsync())}>Increment after 1 second</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement after 1 second</button>
    </div>
  )
}

export default Counter
