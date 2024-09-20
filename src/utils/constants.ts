
export type PomodoroMode = 'Pomodoro' | 'Short Break' | 'Long Break';

export const MODE_DURATIONS: Record<PomodoroMode, number> = {
  Pomodoro: 25 * 60,      // 25 minutos
  'Short Break': 5 * 60,  // 5 minutos
  'Long Break': 15 * 60,  // 15 minutos
};
