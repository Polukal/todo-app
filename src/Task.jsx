import React from 'react'
import Checkbox from './Checkbox'

function Task({name,done}) {
  return (
    <div className='task'>
        <Checkbox checkStatus={done}/>
         {name}
     </div>
  )
}

export default Task
