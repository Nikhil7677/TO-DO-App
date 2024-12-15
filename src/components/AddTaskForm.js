import React, { useState, useEffect } from "react";

const AddTaskForm = ({ addTask, updateTask, taskToEdit, setTaskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  // When taskToEdit changes, prefill the form
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (taskToEdit) {
        updateTask(taskToEdit.id, {
          ...taskToEdit,
          title,
          description,
          dueDate,
          priority,
        });
        setTaskToEdit(null); // Reset after update
      } else {
        addTask({
          id: Date.now(),
          title,
          description,
          dueDate,
          completed: false,
          priority,
        });
      }
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("medium");
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default AddTaskForm;
