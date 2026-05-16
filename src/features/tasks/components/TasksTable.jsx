import TableFilters from "./TableFilters";
import TableBody from "./TableBody";
import { useState } from "react";
import tasks from "../../../data/tasks";
import style from "./TasksTable.module.css";

const TasksTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (!searchTerm) return task;
    else {
      const query = searchTerm.toLowerCase();
      return (
        task.title.includes(query) ||
        task.description.includes(query) ||
        task.project.includes(query)
      );
    }
  });

  return (
    <section className={`${style.tasksTableWrapper} mt-4`}>
      <TableFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableBody tasks={filteredTasks} />
    </section>
  );
};

export default TasksTable;
