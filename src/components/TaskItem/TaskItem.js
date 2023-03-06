import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./taskitem.css";

export default function TaskItem({id, title, taskState, onTaskUpdate, onDeleteTask}) {

//function for edit item task
  const [isEditing,setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);


  //function for change the title.
  const ontitleChange = (event) => { 
    const newtitle  = event.target.value;
    setEditableTitle(newtitle);
    onTaskUpdate(id, newtitle, taskState);
  };

  //function for save the title of item when press enter.
  const onsaveTitle = (event) => {
    if(event?.key === 'Enter') {
      setIsEditing(false);
    }
  }
  const onDelete = (event) => {
    onDeleteTask(id)
  }

  //function for save the status of item.
  const onStateTask = (event) => {
    onTaskUpdate(id,title, event.target.value);
  }

  if (isEditing) {
    return <input type="text" value={editableTitle} onChange={ontitleChange} onKeyPress={onsaveTitle}/>;
  } else {
    return (
      <div> 
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <div>
          <select onChange={onStateTask} value={taskState}>
            <option value="Pending"> Pending </option>
            <option value="Working"> Working </option>
            <option value="Done"> Done </option>
          </select>
            <svg onClick={onDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>

        </div>
      </div>

    );
  }
}

TaskItem.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, 
  taskState: PropTypes.string.isRequired
};