import './App.css';
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className='body'>
      <div className='container'>
        <div className='newtask'>
          <input type='text' id='taskinfo' placeholder='Enter a task ' value={newTask} onChange={handleInputChange} />
          <button className='add-button' value='Add' onClick={addTask}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) =>
            <li key={index}>
              <span className='text'>{task}</span>
              <button className='delete-button'
                onClick={() => deleteTask(index)}>
                <span className='icon'><MdOutlineDeleteOutline /></span>
              </button>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;
