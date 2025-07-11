import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import UserList from './UserList'


function App() {

  
  // const {value} = useSelector((store) => store.counter);
  // console.log(value)

  // const dispatch = useDispatch();


  return (
    <>
      <div>
        {/* <p>{value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        <UserList/>
      </div>
    </>
  )
}

export default App
