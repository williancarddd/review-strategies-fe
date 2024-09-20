'use client';

import dayjs from 'dayjs';

interface FooterProps {
  pomodoros: number;
}

const Footer: React.FC<FooterProps> = ({ pomodoros }) => {
  const finishAt = dayjs().add(25 * pomodoros, 'minute').format('HH:mm');

  return (
    <div className="flex justify-between items-center text-sm p-4 mt-4 border-t">
      <span>Pomodoros: {pomodoros}/4</span>
      <span>Finaliza às: {finishAt}</span>
    </div>
  );
};

export default Footer;