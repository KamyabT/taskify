import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useTaskFilters } from "../../../hooks/useTaskFilters";
import { useTasks } from "../../../context/TasksContext";
import style from "./TasksTable.module.css";

const TasksTable = () => {
  const { tasks } = useTasks();
  const { filters, dispatch, filteredTasks } = useTaskFilters(tasks);

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters filters={filters} dispatch={dispatch} />
      {tasks.length <= 0 ? (
        <p className="text-center text-card-value-medium py-3">
          No tasks found. Create your first task
        </p>
      ) : (
        <TableBody tasks={filteredTasks} />
      )}
    </section>
  );
};

export default TasksTable;
