import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'


function App() {

  
  const {value} = useSelector((store) => store.counter);
  console.log(value)

  const dispatch = useDispatch();


  return (
    <>
      <div>
        <p>{value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
