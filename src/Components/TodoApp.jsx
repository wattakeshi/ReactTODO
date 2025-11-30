
import { useEffect, useState } from 'react'
//useEffect para pegar informaoes ao iniciar o programa
const URL = "http://localhost:3004/todos"
const TodoApp = () => {

useEffect(()=> {
    const fetchTodo = async ()=>{
        try{
        const res = await fetch(URL)
        if(!res.ok){
            throw new Error(`falha ao carrregar dados. Status: ${res.status}`)
        }
        const data = await res.json();
        setTodo(data);
    }catch(error){
        console.error("erro do servidor", error);
    }
   
    }
     fetchTodo();
},[])
        // usestates que vou usar no programa
    const [todo,setTodo] = useState([]);
    const [input, setInput] = useState("");

const handleSubmmit = async (e)=>{
    e.preventDefault();
    try{
        if(input.trim() !== ""){

    const newTodo = {
        text: input,
        done: false
    }

    const res = await fetch(URL,{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(newTodo)
    });

    if(!res.ok){
throw new Error(`Falha no envio: Status ${res.status}`);
            };

            
            const createdTodo = await res.json();
            setTodo((prevTodo)=> ([...prevTodo,createdTodo]))
           setInput("");
}}catch(error) {
        // ✅ A CORREÇÃO: Bloco catch obrigatório para lidar com erros de rede ou o 'throw'
        console.error("Houve um erro na requisição ou no servidor:", error);
    }
}


const handleDeletar = async (id) => {   
    const urlID = `${URL}/${id}`;
    try{
        const res = await fetch(urlID,{
        method: "DELETE"
    }); 
    if(res.ok){
        setTodo(
            (prevTodo)=> prevTodo.filter((task)=> task.id !== id)
        )
    }else{
        throw new Error(`falha ao deletar a tarefa! Status ${res.status}`);
    }}catch (error) {
        console.error("Um erro ocorreu na requisição:", error);
        
    }
}
const handleToggle = async (id,statusAtual) => {
        const novoStatus = !statusAtual;
        const urlID = `${URL}/${id}`;
        try{
            const res = await fetch(urlID,{
                method: "PATCH",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({done: novoStatus})
            });
            if(!res.ok){
                throw new Error(`falhou, erro: ${res.status}`)
            }const updatedTask = await res.json();
            // atualizar a lista dos todos com a nova done: que atualizei no backend
            setTodo(
                (prevTodo)=>{
                   return prevTodo.map((task)=>{
                        if(task.id === id){
                        return updatedTask}
                        return task;
                    })
                }
            )
            
        }catch (error) {
            console.error("erro ao executar a tarefa", error);
        }
    }
    

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
            <button onClick={() => handleToggle(task.id, task.done)}>FEITA</button>
            <button onClick={() => handleDeletar(task.id)}>DELETAR</button>
         </li>)
        
    )}
</ul>
    </div>
  )
}

export default TodoApp