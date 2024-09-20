'use client' ;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const PomodoroTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(1500); // 25 min
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev > 0 ? prev - 1 : 0);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(1500); // Reseta para 25 min
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center my-4">
      <h1 className="text-5xl font-bold">{formatTime(secondsLeft)}</h1>
      <Button onClick={startPauseTimer} className="mt-4">
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={resetTimer} className="mt-4 ml-2">Reset</Button>
    </div>
  );
};

export default PomodoroTimer;
