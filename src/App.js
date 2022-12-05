import { useEffect, useState } from 'react';
import './App.css';
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

  return (
    <main>
      <TaskForm onAdd={addTask}/>
      {tasks.map(task => (
        <Task {...task}/>
      ) )}
    </main>
  );
}

export default App;
