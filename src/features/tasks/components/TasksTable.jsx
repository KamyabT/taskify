import TasksHeader from "./TaskHeader";
import TableFilters from "./TableFilters";
import style from "./TasksTable.module.css";
import TableBody from "./TableBody";

const TasksTable = () => {
  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TasksHeader>
        <TableFilters />
      </TasksHeader>
      <TableBody />
    </section>
  );
};

export default TasksTable;
