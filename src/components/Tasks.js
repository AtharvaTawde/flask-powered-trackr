import Task from "./Task";

function Tasks({ tasks, updateForm }) {
  return tasks.map((task) => <Task key={task.number} task={task} updateForm={updateForm} />);
}

export default Tasks;
