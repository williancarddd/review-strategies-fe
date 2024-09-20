import { Checkbox } from '@/components/ui/checkbox';

interface TaskItemProps {
  task: string;
  completed: boolean;
  toggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completed, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <span className={completed ? 'line-through' : ''}>{task}</span>
      <Checkbox checked={completed} onCheckedChange={toggleComplete} />
    </div>
  );
};

export default TaskItem;
