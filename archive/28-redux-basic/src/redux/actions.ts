import { ActionTypes } from './actionTypes.ts'
import { CounterAction } from './types.ts'

export const increment = (): CounterAction => ({ type: ActionTypes.INCREMENT })
export const decrement = (): CounterAction => ({ type: ActionTypes.DECREMENT })
