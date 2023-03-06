
import React, { useState } from 'react';

import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Tasklist from './components/TaskList/Tasklist';


//function genereted new id.
let idAcc = 0;
const generateID = () => {
  idAcc = idAcc + 1;
  return idAcc;
}


export default function App() {
const [tasks, setTasks] = useState([]);


  //function receive two parameters title, state.
  //this function add task when clicks on the button.
  const addTask = (title, state) => {
    const newTask = {
      id: generateID(),
      title,
      state
    };

    //function for adtion the news task on list of tasks.
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];

    });
  };

  //function update tasks.
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task)  => {
        if (task.id === id ){
          return { ...task, title, state}
        } else { 
          return task;
        }
      });
    });

  };

  //function for delete tasks.
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter(tasks => tasks.id !== id);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Tasklist title="Pending" 
          onAddTask={addTask} 
          taskState= "Pending"
          tasks={tasks.filter((t) =>t.state === "Pending")} 
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
          />

        <Tasklist title="Working"
          onAddTask={addTask}
          taskState="Working"
          tasks={tasks.filter((t) => t.state === "Working")} 
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask} />

        <Tasklist title="Done"
          onAddTask={addTask}
          taskState="Done"
          tasks={tasks.filter((t) => t.state === "Done")} 
         />
      </div>
    </div>
  );
}
