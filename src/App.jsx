import { useEffect, useState } from 'react'

import InputBar from './components/InputBar'
import TodoList from './components/TodoList'

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return data;
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])



  function handleTasksChange(tasks) {
    setTasks(tasks)
  }

  return (
    <>
      <h1>Todo App </h1>
      <div className='todo-container'>
        <InputBar tasks={tasks} handleTasksChange={handleTasksChange} />
        <TodoList tasks={tasks} handleTasksChange={handleTasksChange} />
      </div>
    </>
  )
}

export default App



const data = [
  {
    id: 1,
    text: 'Buy milk',
    completed: false,
  },
  {
    id: 2,
    text: 'Buy eggs',
    completed: true,
  },
  {
    id: 3,
    text: 'Buy bread',
    completed: false,
  },
  {
    id: 4,
    text: 'Buy butter',
    completed: false,
  }
  ,
  {
    id: 5,
    text: 'Buy cheese',
    completed: false,
  }
  ,

]
