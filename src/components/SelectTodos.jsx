
export default function SelectTodos({filter,setFilter}) {
  return (
   <select value={filter} onChange={e=> setFilter(e.target.value)}> 
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="uncompleted">Uncompleted</option>
   </select>
  )
}
