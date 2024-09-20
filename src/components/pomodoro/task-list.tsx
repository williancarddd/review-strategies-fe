// components/TaskList.tsx

'use client';

import { useState, useEffect } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { getTasks, saveTasks } from '@/utils/storages';
import { Button } from '../ui/button';
import TaskItem from './task-item';
import AddTaskButton from './add-task-button';
import { ScrollArea } from '../ui/scroll-area';


interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: string) => {
    const newTask: Task = { id: Date.now(), task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const editTask = (id: number, newTask: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, task: newTask } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Suas Tarefas</h2>
        {/* Botão para redefinir todas as tarefas com confirmação */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Redefinir Tarefas</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className='bg-white'>
            <AlertDialogHeader>
              <AlertDialogTitle>Redefinir Todas as Tarefas?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação irá remover todas as suas tarefas. Você tem certeza que deseja continuar?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={resetTasks}>Redefinir</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma tarefa adicionada ainda.</p>
      ) : (
        <ScrollArea className='w-full h-40 rounded-md border p-4'>
          {
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task.task}
                completed={task.completed}
                onToggle={() => toggleComplete(task.id)}
                onEdit={(newTask) => editTask(task.id, newTask)}
                onDelete={() => deleteTask(task.id)}
              />
            ))
          }
          
        </ScrollArea>
      )}
      <AddTaskButton onAdd={addTask} />
    </div>
  );
};

export default TaskList;
