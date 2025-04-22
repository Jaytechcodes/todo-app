import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem'; // Import TodoItem component
import { AnimatePresence } from 'framer-motion';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Add Task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Delete Task
  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Animated To-Do List</h1>
      
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="toggle-button">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <AnimatePresence>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <TodoItem 
              key={index} 
              task={task} 
              index={index} 
              toggleTask={toggleTask} 
              deleteTask={deleteTask} 
            />
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
}

export default App;
