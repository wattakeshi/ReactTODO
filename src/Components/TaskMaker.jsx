import React from 'react'

const TaskMaker = ({handleSubmmit, input, setInput}) => {
  return (
    <div>
        <form onSubmit={handleSubmmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
</div>
  )
}

export default TaskMaker