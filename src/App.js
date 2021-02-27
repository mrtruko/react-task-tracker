import Header from './components/Header'
import Tasks from './components/Tasks'
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

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => {
    return task.id !== id
  }))
}
  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('Nothing')}
    </div>
  );
}


export default App;
