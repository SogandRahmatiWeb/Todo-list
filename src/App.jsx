import { useEffect, useState } from 'react'
import FormTodos from './components/FormTodos'
import ListTodos from './components/ListTodos'
import './style.css'
import SelectTodos from './components/SelectTodos'
import DeleteTodo from './components/DeleteTodo'


function App() {
  
  const[allTodos,setAllTodos]=useState(()=>{
    return JSON.parse( localStorage.getItem('todos')) || []
  })

  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(allTodos))
  },[allTodos])

  const[filter,setFilter]=useState('all')

  return (
   <main> 
    <DeleteTodo setAllTodos={setAllTodos} />
     <h1><span></span> Add Todos <span></span></h1>    
    <FormTodos setAllTodos={setAllTodos} />   
    <ListTodos allTodos={allTodos} setAllTodos={setAllTodos} filter={filter} />
    <SelectTodos filter={filter} setFilter={setFilter} />
   
    
   </main>
  )
}

export default App
