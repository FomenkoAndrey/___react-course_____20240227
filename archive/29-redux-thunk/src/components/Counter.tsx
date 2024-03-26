import { useDispatch, useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/actions.ts'
import { selectCount } from '../redux/selectors.ts'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { CounterAction, CounterState } from '../redux/types.ts'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<ThunkDispatch<CounterState, unknown, CounterAction>>()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
