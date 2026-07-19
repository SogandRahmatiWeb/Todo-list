import React from 'react'

export default function DeleteTodo({setAllTodos}) {
     const deleteAll=()=>{
    setAllTodos(prev=>[...prev])
    setAllTodos([])
   }
  return (
    <div>
       <button className='deletebut' onClick={deleteAll}>   DELETE ALL  </button> 
    </div>
  )
}
