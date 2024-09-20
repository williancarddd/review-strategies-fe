// utils/storage.ts

import { PomodoroMode, MODE_DURATIONS } from './constants';

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface Settings {
  durations: Record<PomodoroMode, number>;
}

const TASKS_KEY = 'pomodoro_tasks';
const SETTINGS_KEY = 'pomodoro_settings';

// Tarefas
export const getTasks = (): Task[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(TASKS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveTasks = (tasks: Task[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

// Configurações
export const getSettings = (): Settings => {
  if (typeof window === 'undefined') return { durations: MODE_DURATIONS };
  const stored = localStorage.getItem(SETTINGS_KEY);
  return stored ? JSON.parse(stored) : { durations: MODE_DURATIONS };
};

export const saveSettings = (settings: Settings) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};
