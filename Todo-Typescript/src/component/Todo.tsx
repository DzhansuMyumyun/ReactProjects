import React, { useDeferredValue, useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";

interface TodoProps{
    todoContent: TodoType
}


function Todo({todoContent}:TodoProps) {
    const {id, content} = todoContent;
    const dispatch = useDispatch();
    
    const handleRemoveTodo = () =>{
        dispatch(removeTodoById(id))
    }

    const[editable, setEditable] = useState<boolean>(false)
    const[newTodo, setNewTodo] = useState<string>(content)


    const handleUpdateTodo = ()=>{
        const payload = {
            id: id,
            content : newTodo
        } 
        dispatch(updateTodo(payload))
        setEditable(!editable)
       
    }


  return (
    <div>

        
        {
            editable? <input type="text" value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} /> :<p>{content}</p> 
        }
        <IoIosRemoveCircle onClick={handleRemoveTodo} />

        {
            editable? <FaCheck onClick={handleUpdateTodo} /> : <FaEdit onClick={()=> setEditable(!editable)} />
        }
        
        

    </div>
  )
}

export default Todo