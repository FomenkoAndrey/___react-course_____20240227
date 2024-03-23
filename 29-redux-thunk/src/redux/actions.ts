import { ActionTypes } from './actionTypes.ts'
import { AsyncCounterAction } from './types.ts'

export const incrementAsync = (): AsyncCounterAction => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: ActionTypes.INCREMENT })
  }, 1000)
}

export const decrementAsync = (): AsyncCounterAction => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: ActionTypes.DECREMENT })
  }, 1000)
}
