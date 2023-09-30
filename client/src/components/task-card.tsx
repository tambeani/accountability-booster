
function TaskDetails() {
  const [title, description, assignee ] = ["Eat Healthy", "This task promotes healthy behavior.","Aniruddha" ]
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{assignee}</p>
    </div>
  );
}

export default TaskDetails;