import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useTaskFilters } from "../../../hooks/useTaskFilters";
import style from "./TasksTable.module.css";

const TasksTable = ({ tasks, handleDelete, isLoading , isEditing , setIsEditing}) => {
  const { filters, dispatch, filteredTasks } = useTaskFilters(tasks);

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters filters={filters} dispatch={dispatch} />
      {tasks.length <= 0 ? (
        <p className="text-center text-card-value-medium py-3">
          No tasks found. Create your first task
        </p>
      ) : (
        <TableBody
          tasks={filteredTasks}
          handleDelete={handleDelete}
          isLoading={isLoading}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </section>
  );
};

export default TasksTable;
