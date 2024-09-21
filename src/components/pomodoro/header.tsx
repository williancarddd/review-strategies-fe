
'use client';

import { PomodoroMode } from "@/utils/constants";

interface HeaderProps {
  currentMode: PomodoroMode;
  setMode: (mode: PomodoroMode) => void;
}

const Header: React.FC<HeaderProps> = ({ currentMode, setMode }) => {
  const modes: PomodoroMode[] = ['Pomodoro', 'Short Break', 'Long Break'];

  return (
    <div className="flex justify-center space-x-4 my-4">
      {modes.map((mode) => (
        <button
          key={mode}
          className={`text-lg font-semibold px-4 py-2 rounded ${
            currentMode === mode ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setMode(mode)}
        >
          {mode === 'Pomodoro' ? 'Pomodoro' : mode === 'Short Break' ? 'Pausa Curta' : 'Pausa Longa'}
        </button>
      ))}
    </div>
  );
};

export default Header;