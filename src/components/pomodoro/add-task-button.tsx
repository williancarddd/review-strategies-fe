
'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TaskModal from './Task-modal';
import { Button } from '../ui/button';


interface AddTaskButtonProps {
  onAdd: (task: string) => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (task: string) => {
    onAdd(task);
    setIsOpen(false);
  };

  return (
    <div className="my-4">
      <Button className="w-full flex items-center justify-center" onClick={() => setIsOpen(true)}>
        <FaPlus className="mr-2" /> Adicionar Tarefa
      </Button>
      <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleAdd} />
    </div>
  );
};

export default AddTaskButton;
