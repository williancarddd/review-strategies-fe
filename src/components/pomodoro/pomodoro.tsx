
'use client';

import { useEffect, useState } from 'react';

import { FaCog } from 'react-icons/fa';
import { Button } from '../ui/button';
import Header from './header';
import PomodoroTimer from './pomodoro-timer';
import TaskList from './task-list';
import Footer from './footer';
import { PomodoroMode } from '@/utils/constants';
import SettingsModal from './setting-modal';

const PomodoroApp = () => {
  const [mode, setMode] = useState<PomodoroMode>('Pomodoro');
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const handleComplete = () => {
    if (mode === 'Pomodoro') {
      setPomodoroCount((prev) => prev + 1);
      // Lógica para alternar modos automaticamente
      if ((pomodoroCount + 1) % 4 === 0) {
        setMode('Long Break');
      } else {
        setMode('Short Break');
      }
    } else {
      setMode('Pomodoro');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-end">
        <Button variant="ghost" onClick={() => setSettingsOpen(true)}>
          <FaCog />
        </Button>
      </div>
      <Header currentMode={mode} setMode={setMode} />
      <PomodoroTimer mode={mode} onComplete={handleComplete} />
      <TaskList />
      <Footer pomodoros={pomodoroCount} />
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default PomodoroApp;
