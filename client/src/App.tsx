import TaskList, { Task } from "./components/task-list";

function App() {
  const tasks: Task[] = [
    {
      title: "Sleep Early",
      description: "Try to sleep before 10 PM",
      creator: "Aniruddha",
    },
    {
      title: "Eat Healthy",
      description: "Try to eat atleast 1 fruit",
      creator: "Raveena",
    },
    {
      title: "Drink Water",
      description: "Drink atleast 5 bottles of water",
      creator: "Raveena",
    },
  ];

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
