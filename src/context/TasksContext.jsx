import { createContext, useState, useEffect, useContext } from "react";
import { getTasks, deleteTask } from "../services/tasks";
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
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
