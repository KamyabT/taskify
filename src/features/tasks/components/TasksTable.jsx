import { useEffect, useState } from "react";
import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useTaskFilters } from "../../../hooks/useTaskFilters";
import { getTasks } from "../../../services/tasks";
// import tasks from "../../../data/tasks";
import style from "./TasksTable.module.css";

const TasksTable = () => {
  const [tasks, setTasks] = useState([]);
  const { filters, dispatch, filteredTasks } = useTaskFilters(tasks);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks();

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters filters={filters} dispatch={dispatch} />
      <TableBody tasks={filteredTasks} />
    </section>
  );
};

export default TasksTable;
