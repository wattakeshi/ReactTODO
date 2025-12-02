import React from 'react'

const TaskList = ({todo, handleDeletar, handleToggle}) => {
  return (
    <div>
        <ul>
        {todo.map((task)=>(
         <li key={task.id}>
            {task.done? <p className="done">{task.text}</p> : <p className="ndone">{task.text}</p> }
            <button onClick={() => handleToggle(task.id, task.done)}>FEITA</button>
            <button onClick={() => handleDeletar(task.id)}>DELETAR</button>
         </li>)
        
            )}
        </ul>
    </div>
  )
}

export default TaskList