//project files
import Task from "./Task"
export default function TaskList({ list }) {
	const TaskList = list.map((item) => <Task task={item} key={item.id} />)
	return (
			<ul>{TaskList}</ul>
	)
}