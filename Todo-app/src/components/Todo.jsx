import React from 'react'
import { CiSquareRemove } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import "../App.css";
import { useState } from 'react';
import { use } from 'react';

function Todo({todo, onRemoveTodo, onUpdateTodo}) {

  const {id, content} = todo;

  const [editable, setEditable] = useState(false);
  const [updateTodo, setNewTodo] = useState(content)


  const removeTodo =()=>{
    onRemoveTodo(id);
  }

  const updateTodoItem = ()=>{
    const request={
      id : id,
      content : updateTodo
    }
    onUpdateTodo(request)
    setEditable(false)
  }

  console.log({todo})
  return (
    <div className='todo-list-container'>
        <div className='todo-list-item'>
            <div>
              {
                editable ? <input value={updateTodo} onChange={(e) => setNewTodo(e.target.valu)} type="text" style={{padding:"1em",border:"none", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"350px"}} />: content
              }
            </div>
            <div className='todo-list-remove'>
                <CiSquareRemove onClick={removeTodo} style={{fontSize:"30px", color:"red", cursor:"pointer" }}/>

                {

                  editable 
                  ? <RxUpdate  style={{fontSize:"25px", color:"green", cursor:"pointer", marginLeft:"5px" }} onClick={updateTodoItem}/> 
                  :<RxUpdate  style={{fontSize:"25px", color:"green", cursor:"pointer", marginLeft:"5px" }} onClick={() => setEditable(true)}/> 

                }
            </div>
        </div>
    </div>
  )
}

export default Todo