import { useEffect, useState } from 'react';
import './App.css';
import Background from './Background'
import Clear from './Clear';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
    let initialState = []
    const [tasks,setTasks] = useState(initialState);

    useEffect(() => {
      if(tasks.length === 0) return;
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
    }, [])

    function addTask(name){
      
        setTasks(prev => {
          return [...prev, {name:name,done:false}]
        })
    }

    function removeTask(indexToRemove) {
      setTasks(prev => {
        return prev.filter((taskObject,index) => index !== indexToRemove)
      })
    }

    function removeCompletedTasks(){
      setTasks(prev => {
        return prev.filter(tasks => tasks.done === false )
      })
    }

    function updateTaskDone(taskIndex, newDone){
      setTasks(prev => {
        const newTasks = [...prev];
        newTasks[taskIndex].done = newDone
        return newTasks
      })
    }

    function getMessage(){
      const percentage = (numberComplete)/(numberTotal+1) * 100;
      if(percentage === 0){
        return "Take them by storm ⚡"
      }
      if(numberComplete === numberTotal){
        return "Nice job for today!"
      }
      return "Keep it going 💪"
    }


    const numberComplete = tasks.filter(t => t.done).length
    const numberTotal = tasks.length
    

  return (
    
    <main>

      <Background/>

      <div className='content'>
      <h1>{numberComplete}/{numberTotal} Complete</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask}/>
      {tasks.map((task, index) => (
        <Task {...task} 
        onTrash={() => removeTask(index)}
        onToggle={ done => updateTaskDone(index, done)}/>
      ))}

      <Clear onClear={() => removeCompletedTasks()}/>
      </div>
      
    </main>

    
    );
}

export default App;
