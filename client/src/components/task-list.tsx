import TaskDetails from "./task-details";

interface Props {
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  creator: string;
}

//in JS array have method called map for mapping each item to different type
function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskDetails task={task} />
      ))}
    </div>
  );
}

export default TaskList;
