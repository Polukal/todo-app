import React, { useState } from 'react'



function TaskForm({onAdd}) {

    
   
    let initialState = ''
    const [taskName,setTaskName] = useState(initialState)


    function handleSubmit(ev) {
        ev.preventDefault();
        onAdd(taskName);
        setTaskName("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
    <button>+</button>
    <input type="text" 
    value={taskName} 
    onChange={ev => setTaskName(ev.target.value)} 
    placeholder='Your next task...'/>
  </form>
  </div>
  )
}

export default TaskForm