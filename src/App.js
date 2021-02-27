import Header from './components/Header'
import Task from './components/Task'
import React, { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Texto Uno',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Texto Dos',
        day: 'Feb 5th at 3:30pm',
        reminder: false
    }

])
  return (
    <div className="container">
     <Header />
     <Task tasks={tasks}/>
    </div>
  );
}


export default App;
