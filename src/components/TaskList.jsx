//project files
import Task from "./Task";
export default function TaskList({ items }) {
  const TaskList = items.map((item) => <Task task={item} key={item.id} />);
  return <ul>{TaskList}</ul>;
}
