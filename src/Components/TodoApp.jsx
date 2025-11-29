
import { useEffect, useState } from 'react'
const KEY = "KEY"
//useEffect para pegar informaoes ao iniciar o programa

const TodoApp = () => {

useEffect(()=> {
const fet = localStorage.getItem(KEY);
if (fet){
const req = JSON.parse(fet)
    setTodo(req)
}},[])
        // usestates que vou usar no programa
    const [todo,setTodo] = useState([]);
    const [input, setInput] = useState("");

const handleSubmmit = (e)=>{
    e.preventDefault()
    if(input.trim() !== ""){
        const newTodo = {
            id: Date.now(),
            text: input
        }
        setTodo((prev)=> [...prev, newTodo]);
        setInput("")
    }
}
const handleDeletar = (id) => {
   const atualizado = todo.filter((todo)=> {
    return todo.id !== id
    })
    setTodo(atualizado)
}
useEffect(()=>{
    //salvar dados enviados da todo para o localstorage
    if(todo.length > 0){
    const task = JSON.stringify(todo)
localStorage.setItem(KEY, task)
}},[todo])

  return (



//PARTE DO HTML
    <div>
        {/* TITULO */}
        <h1>React TODO APP</h1>
        {/* formulario */}
<form onSubmit={handleSubmmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <input type="submit" value="Enviar" />
</form>
{/* LISTA DE TAREFAS */}
<ul>
    {todo.map((task)=>(
         <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeletar(task.id)}>DELETAR</button>
         </li>)
        
    )}
</ul>
    </div>
  )
}

export default TodoApp