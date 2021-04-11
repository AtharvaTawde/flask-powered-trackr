import Task from './Task';

function Tasks({ tasks, remove }) {
	return (tasks.map(task => (
		<Task key={task.id} task={task} remove={remove} />	
	)));
}

export default Tasks;

