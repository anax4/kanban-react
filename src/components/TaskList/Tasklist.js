import React from 'react';
import "./taskslist.css";
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask }) {

//function call the addtask()
//create the task and set the state == "Pending"
  const addTask = () => {
    onAddTask('Nova Tarefa', taskState);
  }

  return ( 
    <div className="taskslist">
      <div className="title">{title}</div>
      <div className='content'>
        {tasks?.map((task) => {
          return ( <TaskItem 
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
             onDeleteTask={onDeleteTask}
              />
          );
        })}
        </div>

      <button className='button' onClick={addTask}> Add Tarefa</button>
    </div>
   );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired

}