
'use client';

import { MODE_DURATIONS, PomodoroMode } from '@/utils/constants';
import { saveSettings } from '@/utils/storages';
import { useForm } from 'react-hook-form';
import { Modal } from '../ui/modal';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm<Record<PomodoroMode, number>>({
    defaultValues: {
      Pomodoro: MODE_DURATIONS['Pomodoro'] / 60,
      'Short Break': MODE_DURATIONS['Short Break'] / 60,
      'Long Break': MODE_DURATIONS['Long Break'] / 60,
    },
  });

  const onSubmit = (data: Record<PomodoroMode, number>) => {
    const newSettings = {
      durations: {
        Pomodoro: data.Pomodoro * 60,
        'Short Break': data['Short Break'] * 60,
        'Long Break': data['Long Break'] * 60,
      },
    };
    saveSettings(newSettings);
    reset({
      Pomodoro: newSettings.durations.Pomodoro / 60,
      'Short Break': newSettings.durations['Short Break'] / 60,
      'Long Break': newSettings.durations['Long Break'] / 60,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-xl">Configurações</h2>
        {(['Pomodoro', 'Short Break', 'Long Break'] as PomodoroMode[]).map((mode) => (
          <div key={mode} className="flex flex-col">
            <label className="mb-1 capitalize">
              {mode === 'Pomodoro' ? 'Pomodoro' : mode === 'Short Break' ? 'Pausa Curta' : 'Pausa Longa'} Duração (minutos)
            </label>
            <Input
              type="number"
              min={1}
              {...register(mode, { required: true, min: 1 })}
              className="w-full"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <Button type="button" variant="ghost" onClick={onClose} className="mr-2">
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;
