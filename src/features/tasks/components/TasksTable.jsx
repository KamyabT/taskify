import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useTaskFilters } from "../../../hooks/useTaskFilters";
import style from "./TasksTable.module.css";

const TasksTable = ({ tasks , handleDelete , isLoading }) => {
  const { filters, dispatch, filteredTasks } = useTaskFilters(tasks);

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters filters={filters} dispatch={dispatch} />
      <TableBody tasks={filteredTasks} handleDelete={handleDelete} isLoading={isLoading} />
    </section>
  );
};

export default TasksTable;
