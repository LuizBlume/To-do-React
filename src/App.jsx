import { useState } from 'react';
import React from 'react';
import './Sass/style.css'
import Button from './components/ButtonAdd.jsx'
import Input from './components/InputText.jsx'
import Result from './components/ResultTask.jsx';
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (newTask) => {
    setTask(newTask);
  };
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  return (
    <div className='container'>
      <div className='form'>
        <Input value={task} onChange={handleInputChange} />
        <Button onClick={handleAddTask} />
        <div className='result-end'>
          <Result results={tasks} />
        </div>
      </div>
    </div>
  )
}

export default App
