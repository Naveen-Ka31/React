import { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState(["Learn React", "Build Todo App"]);


  const addTask = () => {
    if (taskInput !== "") {
      setTasks([...tasks, taskInput]); 
      setTaskInput("");               
    }
  };

  const deleteTask = (indexToRemove) => {
    const updatedList = tasks.filter((task, index) => index !== indexToRemove);
    setTasks(updatedList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Todo List</h2>
      <input 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Type a new task..."
      />
      <button onClick={addTask}>Add</button>
      <ul style={{listStyleType:"None"}}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px", textDecoration: "none" }}>
            {task} 
            
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;