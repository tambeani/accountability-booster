import { Task } from "./task-list";

interface Props {
  task: Task;
}

function TaskDetails({ task }: Props) {
  return (
    <div>
      <br />
      <h1>{task.title}</h1>
      <h3>{task.description}</h3>
      By {task.creator}
      <br />
    </div>
  );
}
export default TaskDetails;
