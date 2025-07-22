import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/Types';

function ToDoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () =>{
        if(newTodo.trim().length ==0){
            alert("create todo")
            return;
        }
        const payload:TodoType = {
            id : Math.floor(Math.random()*9999999999999),
            content : newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('')
    }

  return (
    <div>
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" className='todo-create' />
        <button onClick={handleCreateTodo}>Create</button>
    </div>
  )
}

export default ToDoCreate