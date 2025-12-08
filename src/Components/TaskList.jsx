import React from 'react'

const TaskList = ({todo, handleDeletar, handleToggle}) => {
  return (
    <div className='border rounded-xl border-solid p-8 bg-white'>
        <ul>
        {todo.map((task)=>(
          
         <li key={task.id} className='p-5 bg-neutral-50 border rounded-xl m-2.5  w-auto shadow-x1 flex justify-between hover:bg-white'>
            {task.done? <p className="done text-shadow-lg/30">{task.text}</p> : <p className="ndone">{task.text}</p> }
           <div className="flex space-x-2">
            <button className='justify-items-end border border-neutral-300 hover:bg-neutral-400' onClick={() => handleToggle(task.id, task.done)}>  DONE  </button>
            <button className='justify-items-end border border-neutral-300 hover:bg-neutral-400' onClick={() => handleDeletar(task.id)}>  DELETE  </button>
            </div>
         </li>)
        
            )}
        </ul>
    </div>
  )
}

export default TaskList