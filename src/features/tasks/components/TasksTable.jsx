import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useTaskFilters } from "../../../hooks/useTaskFilters";
import style from "./TasksTable.module.css";

const TasksTable = ({ tasks }) => {
  const { filters, dispatch, filteredTasks } = useTaskFilters(tasks);

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters filters={filters} dispatch={dispatch} />
      <TableBody tasks={filteredTasks} />
    </section>
  );
};

export default TasksTable;
