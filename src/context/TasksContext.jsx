import { createContext, useState, useEffect, useContext } from "react";
import { getTasks, deleteTask } from "../services/tasks";
import toast from "react-hot-toast";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  async function fetchTasks() {
    setIsLoading(true);
    try {
      const data = await getTasks();
      setTasks(data); // 👈 حالا tasks پر شد
    } catch (error) {
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
      toast.error("Failed to delete tasks, Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks(); // 👈 وقتی اپ لود میشه خودکار فچ میکنه
  }, []);

  async function handleTaskCreated() {
    await fetchTasks();
    setIsModalOpen(false);
  }

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

  return (
    <TasksContext.Provider value={{ tasks, isLoading, fetchTasks, handleDelete , handleCancelDelete , handleConfirmDelete , handleTaskCreated}}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
