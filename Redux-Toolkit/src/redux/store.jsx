import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../redux/counterSlice'
import  useReducer from '../redux/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
  },
})
