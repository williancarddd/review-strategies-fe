
'use client';

import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useSound from 'use-sound';
import { ProgressBar } from '../ui/progress-bar';
import { Button } from '../ui/button';
import { MODE_DURATIONS, PomodoroMode } from '@/utils/constants';

interface PomodoroTimerProps {
  mode: PomodoroMode;
  onComplete: () => void;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ mode, onComplete }) => {
  const alarmSound = require('@/assets/alarm.mp3');

  const initialSeconds = MODE_DURATIONS[mode];
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(alarmSound, { volume: 0.5 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSecondsLeft(MODE_DURATIONS[mode]);
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [mode]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev: number) => {
          if (prev > 0) return prev - 1;
          else {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            play();
            toast.info(`${mode} finalizado!`);
            onComplete();
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, mode, play, onComplete]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(MODE_DURATIONS[mode]);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const progress = ((MODE_DURATIONS[mode] - secondsLeft) / MODE_DURATIONS[mode]) * 100;

  return (
    <div className="text-center my-4">
      <h1 className="text-5xl font-bold mb-4">{formatTime(secondsLeft)}</h1>
      <ProgressBar value={progress} />
      <div className="flex justify-center mt-4">
        <Button onClick={startPauseTimer} className="mr-2 flex items-center">
          {isRunning ? <FaPause className="mr-1" /> : <FaPlay className="mr-1" />} {isRunning ? 'Pausar' : 'Iniciar'}
        </Button>
        <Button onClick={resetTimer} variant="ghost" className="flex items-center">
          <FaRedo className="mr-1" /> Resetar
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
