
'use client';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

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
import { Checkbox } from '../ui/checkbox';
import TaskModal from './Task-modal';

interface TaskItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onEdit: (newTask: string) => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completed, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newTask: string) => {
    onEdit(newTask);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Checkbox checked={completed} onCheckedChange={onToggle} />
          <span className={`ml-2 ${completed ? 'line-through text-gray-500' : ''}`}>{task}</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
          {/* Integração do AlertDialog para confirmação de exclusão */}
          <AlertDialog>
            <AlertDialogTrigger className="text-red-500 hover:text-red-700">
              <FaTrash />
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que deseja deletar esta tarefa?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. A tarefa será removida permanentemente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>Deletar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <TaskModal isOpen={isEditing} onClose={() => setIsEditing(false)} onSubmit={handleEdit} initialValue={task} />
    </>
  );
};

export default TaskItem;
