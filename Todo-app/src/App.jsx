import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import './css/Todo.css'
import TodoList from './components/TodoList'

function App() {


  const [todos, setTodos] = useState([]);

  const createTodo = (newtodo) => {
    setTodos([...todos, newtodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)]);
  }

  const updateTodoList = (newTodo) => {
    const updatedTodos = todos.maps((todo)=> {
        if(todo.id!== newTodo.id){
          return todo;
        }
        return newTodo;
      })

    setTodos([...updateTodoList])
  }




  return (
    <>
    <div className='todo-container'>
      <div className='todo-sub-container'>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodoList}/>
      </div>

    </div>

    </>
  )
}

export default App
