// components/TaskModal.tsx

'use client';

import { useForm } from 'react-hook-form';
import { Modal } from '../ui/modal';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: string) => void;
  initialValue?: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit, initialValue = '' }) => {
  const { register, handleSubmit, reset } = useForm<{ task: string }>({
    defaultValues: { task: initialValue },
  });

  const submit = (data: { task: string }) => {
    onSubmit(data.task);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(submit)} className="p-4 space-y-4">
        <h2 className="text-xl mb-2">{initialValue ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h2>
        <Input {...register('task', { required: true })} placeholder="Descrição da tarefa" />
        <div className="flex justify-end">
          <Button type="button" variant="ghost" onClick={onClose} className="mr-2">
            Cancelar
          </Button>
          <Button type="submit">{initialValue ? 'Salvar' : 'Adicionar'}</Button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
