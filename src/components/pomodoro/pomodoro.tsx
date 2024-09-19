
import PomodoroTimer from "./pomodoro-timer";
import TaskList from "./task-list";
import Footer from "./footer";
import AddTaskButton from "./add-task-button";
import Header from "./header";


const PomodoroApp = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <Header />
      <PomodoroTimer />
      <TaskList />
      <AddTaskButton />
      <Footer />
    </div>
  );
};

export default PomodoroApp;
