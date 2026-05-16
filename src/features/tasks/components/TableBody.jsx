import TableHeader from "./TableHeader";
import TaskRow from "./TaskRow";

const TableBody = ({ tasks }) => {
  return (
    <>
      <TableHeader />
      <TaskRow tasks={tasks} />
    </>
  );
};

export default TableBody;
