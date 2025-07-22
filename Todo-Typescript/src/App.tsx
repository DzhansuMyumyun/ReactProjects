import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './component/ToDoCreate'
import TodoList from './component/TodoList'

function App() {

  return (
    <>
      <ToDoCreate/>
      <TodoList/>
    </>
  )
}

export default App
