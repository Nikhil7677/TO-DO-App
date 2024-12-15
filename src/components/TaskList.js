import React from "react";

const TaskList = ({ tasks, updateTask, deleteTask, toggleComplete, setTaskToEdit }) => {
  const handleEdit = (task) => {
    setTaskToEdit(task); // Set task to edit in App.js
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""} ${task.priority}`}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.dueDate && <small>Due: {task.dueDate}</small>}
          <div className="task-actions">
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
