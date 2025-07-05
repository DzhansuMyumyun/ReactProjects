import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';

function TodoCreate({onCreateTodo}) {

    const [newTodo, setNewTodo] = useState("");
    const clearInput =() =>{
        setNewTodo('');
    }


    const createTodo = () =>{
        if(!newTodo)return;
        const request = {
            id: Math.floor(Math.random()*999999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();
    }



  return (  
    <>
        <h1>Stay on track, effortlessly.</h1>
        <div>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Add a new task...'/>
        </div>
        <div className='save-button-div'>
            <button onClick={createTodo} className='save-button'>Save</button>
        </div>
    </>
    
  )
}

export default TodoCreate