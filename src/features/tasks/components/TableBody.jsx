import TableHeader from "./TableHeader";
import TaskRow from "./TaskRow";

const TableBody = ({ tasks }) => {
  return (
    <>
      <TableHeader />
      {tasks.map((task)=>  <TaskRow key={task.id} task={task} />)}
    </>
  );
};

export default TableBody;
