import { configureStore } from '@reduxjs/toolkit'
import counterReductor from './reductor.ts'

const store = configureStore({
  reducer: counterReductor
})

export default store
