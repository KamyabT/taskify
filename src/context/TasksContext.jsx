import { createContext, useState, useEffect, useContext } from "react";
import { getTasks, deleteTask } from "../services/tasks";
import { isThisMonth, isSameMonth, subMonths } from "date-fns";
import toast from "react-hot-toast";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  async function fetchTasks() {
    setIsLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      toast.error("Failed to get tasks. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function taskRemoval(id) {
    setIsLoading(true);
    try {
      await deleteTask(id);
      await fetchTasks();
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete task. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function handleDelete(task) {
    setTaskToDelete(task);
  }

  async function handleConfirmDelete() {
    await taskRemoval(taskToDelete.id);
    setTaskToDelete(null);
  }

  function handleCancelDelete() {
    setTaskToDelete(null);
  }

  async function handleTaskCreated() {
    await fetchTasks();
    setIsModalOpen(false);
  }

  function handleEditTask(task) {
    setTaskToEdit(task);
  }

  async function handleTaskEdited() {
    await fetchTasks();
    setTaskToEdit(null);
    toast.success("Task updated successfully!");
  }

  /*****************Stat Cards Logic****************/
  // const completedTasks

  const currentMonthTasks = tasks.filter((task) => {
    return isThisMonth(new Date(task.created));
  });

  const perviousMonthTasks = tasks.filter((task) => {
    return isSameMonth(new Date(task.created), subMonths(new Date(), 1));
  });

  let thisMonthTotalTasks = currentMonthTasks.length;
  let lastMonthTotalTasks = perviousMonthTasks && perviousMonthTasks.length > 0 ? perviousMonthTasks.length : 0;
  let thisMonthInProgressTasks = currentMonthTasks.filter(
    (task) => task.status === "In-Progress",
  ).length;
  let lastMonthInProgressTasks = perviousMonthTasks && perviousMonthTasks.length > 0 ? perviousMonthTasks.filter(
    (task) => task.status === "In-Progress",
  ).length : 0;
  let thisMonthCompletedTasks = currentMonthTasks.filter(
    (task) => task.status === "Completed",
  ).length;
  let lastMonthCompletedTasks = perviousMonthTasks && perviousMonthTasks.length > 0 ? perviousMonthTasks.filter(
    (task) => task.status === "Completed",
  ).length : 0;
  let thisMonthOverdueTasks = currentMonthTasks.filter(
    (task) => task.status === "Overdue",
  ).length;
  let lastMonthOverdueTasks = perviousMonthTasks && perviousMonthTasks.length > 0 ? perviousMonthTasks.filter(
    (task) => task.status === "Overdue",
  ).length : 0;

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isLoading,
        isModalOpen,
        setIsModalOpen,
        taskToDelete,
        taskToEdit,
        setTaskToEdit,
        handleDelete,
        handleConfirmDelete,
        handleCancelDelete,
        handleTaskCreated,
        handleEditTask,
        handleTaskEdited,
        fetchTasks,
        thisMonthTotalTasks,
        lastMonthTotalTasks,
        thisMonthInProgressTasks,
        lastMonthInProgressTasks,
        thisMonthCompletedTasks,
        lastMonthCompletedTasks,
        thisMonthOverdueTasks,
        lastMonthOverdueTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
