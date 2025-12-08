import React from 'react'

const TaskMaker = ({handleSubmmit, input, setInput}) => {
  return (
    <div className='p-2'>
        <form onSubmit={handleSubmmit}>
             <input className="border rounded-2xl bg-white " type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <input className='hover:bg-white border' type="submit" value="Enviar" />
        </form>
</div>
  )
}

export default TaskMaker