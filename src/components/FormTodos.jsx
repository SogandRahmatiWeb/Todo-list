import React, { useRef, useState } from 'react'

export default function FormTodos({setAllTodos}) {

  const[inpValue,setInpValue]=useState('')
  const inp = useRef(null)

  const addNewTodoHandler =(e) =>{
    e.preventDefault()

    if (!inpValue.trim()) return

    const newTodo ={
        id:Date.now(),
        title: inpValue,
        isComplete:false,
        createdAt:new Date().toLocaleDateString('en'),
    }

    setAllTodos(prev =>[...prev , newTodo])

    setInpValue('')
    inp.current.focus()
  }

  return (
    <form onSubmit={addNewTodoHandler}>
        <input type="text" ref={inp} placeholder='add a todo...'  value={inpValue} onChange={e => setInpValue(e.target.value)} />
        <button>+</button>
        
    </form>
  )
}
