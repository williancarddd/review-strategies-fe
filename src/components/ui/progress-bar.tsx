'use client';

interface ProgressBarProps {
  value: number; // 0 a 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full transition-width duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};