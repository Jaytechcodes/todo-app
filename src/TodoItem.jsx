import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <motion.li
      className={`todo-item ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span onClick={() => toggleTask(index)}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </motion.li>
  );
};

export default TodoItem;
