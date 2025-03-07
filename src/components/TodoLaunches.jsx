
import React, { useState, useEffect } from "react";
import "./TodoLaunches.css";

const TodoLaunches = () => {
  // Retrieve saved data from localStorage
  const getSavedTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
  const getSavedLaunches = () => JSON.parse(localStorage.getItem("launches")) || [];

  // State for To-Do List
  const [tasks, setTasks] = useState(getSavedTasks);
  const [taskInput, setTaskInput] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // State for Upcoming Launches
  const [launches, setLaunches] = useState(getSavedLaunches);
  const [launchInput, setLaunchInput] = useState({
    name: "",
    date: "",
    location: "",
    t0Time: "",
  });
  const [editingLaunchIndex, setEditingLaunchIndex] = useState(null);
  const [editedLaunch, setEditedLaunch] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save launches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("launches", JSON.stringify(launches));
  }, [launches]);

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() === "") return;
    const updatedTasks = [...tasks, taskInput];
    setTasks(updatedTasks);
    setTaskInput("");
  };

  // Edit an existing task
  const editTask = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  // Save the edited task
  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Add a new launch
  const addLaunch = () => {
    if (!launchInput.name || !launchInput.date || !launchInput.location || !launchInput.t0Time) return;
    const updatedLaunches = [...launches, launchInput];
    setLaunches(updatedLaunches);
    setLaunchInput({ name: "", date: "", location: "", t0Time: "" });
  };

  // Edit an existing launch
  const editLaunch = (index) => {
    setEditingLaunchIndex(index);
    setEditedLaunch({ ...launches[index] });
  };

  // Save the edited launch
  const saveEditedLaunch = (index) => {
    const updatedLaunches = [...launches];
    updatedLaunches[index] = editedLaunch;
    setLaunches(updatedLaunches);
    setEditingLaunchIndex(null);
  };

  // Delete a launch
  const deleteLaunch = (index) => {
    const updatedLaunches = launches.filter((_, i) => i !== index);
    setLaunches(updatedLaunches);
  };

  return (
    <div className="todo-launches-container">

      {/* ✅ To-Do List Section (Now Added Back) */}
      <div className="todo-section">
        <h2>🚀 Mission To-Do List</h2>
        <div className="input-container">
          <input type="text" placeholder="Enter task..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <button className="add-btn" onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {editingTaskIndex === index ? (
                <>
                  <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                  <button onClick={() => saveEditedTask(index)}>💾 Save</button>
                </>
              ) : (
                <>
                  {task}
                  <button className="edit-btn" onClick={() => editTask(index)}>✏️ Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>❌</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Upcoming Launches Section */}
      <div className={`launch-section ${editingLaunchIndex !== null ? "expanded" : ""}`}>
        <h2>📅 Upcoming Launches</h2>
        <div className="input-container">
          <input type="text" placeholder="Mission Name" value={launchInput.name} onChange={(e) => setLaunchInput({ ...launchInput, name: e.target.value })} />
          <input type="date" value={launchInput.date} onChange={(e) => setLaunchInput({ ...launchInput, date: e.target.value })} />
          <input type="text" placeholder="Launch Location" value={launchInput.location} onChange={(e) => setLaunchInput({ ...launchInput, location: e.target.value })} />
          <input type="text" placeholder="T-0 Time (UTC)" value={launchInput.t0Time} onChange={(e) => setLaunchInput({ ...launchInput, t0Time: e.target.value })} />
          <button className="add-btn" onClick={addLaunch}>Add</button>
        </div>
        <ul>
          {launches.map((launch, index) => (
            <li key={index}>
              {editingLaunchIndex === index ? (
                <>
                  <input type="text" value={editedLaunch.name} onChange={(e) => setEditedLaunch({ ...editedLaunch, name: e.target.value })} />
                  <input type="date" value={editedLaunch.date} onChange={(e) => setEditedLaunch({ ...editedLaunch, date: e.target.value })} />
                  <input type="text" value={editedLaunch.location} onChange={(e) => setEditedLaunch({ ...editedLaunch, location: e.target.value })} />
                  <input type="text" value={editedLaunch.t0Time} onChange={(e) => setEditedLaunch({ ...editedLaunch, t0Time: e.target.value })} />
                  <button onClick={() => saveEditedLaunch(index)}>💾 Save</button>
                </>
              ) : (
                <>
                  <strong>{launch.name}</strong> - {launch.date} at {launch.t0Time} UTC ({launch.location})
                  <button className="edit-btn" onClick={() => editLaunch(index)}>✏️ Edit</button>
                  <button className="delete-btn" onClick={() => deleteLaunch(index)}>❌</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TodoLaunches;

