'use client';
import { useState } from 'react';
import TaskItem from './pomodoro-item';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { task: 'Tarefa 1', completed: false },
    { task: 'Tarefa 2', completed: false },
  ]);

  const toggleComplete = (index: number) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  return (
    <div className="my-6">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task.task} completed={task.completed} toggleComplete={() => toggleComplete(index)} />
      ))}
    </div>
  );
};

export default TaskList;
