import { useState, useEffect } from "react";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import CompletionChart from "../features/dashboard/CompletionChart";
import StatsCards from "../features/dashboard/StatsCards";
import TasksTable from "../features/tasks/components/TasksTable";
import style from "./Dashboard.module.css";
import OverViewChart from "../features/dashboard/OverViewChart";
import PriorityChart from "../features/dashboard/PriorityChart";
import Modal from "../components/ui/Modal/Modal";
import AddTaskForm from "../features/tasks/components/AddTaskForm";
import { getTasks, deleteTask } from "../services/tasks";
import toast from "react-hot-toast";
import Confirmation from "../components/ui/Confirmation/Confirmation";
import { useTasks } from "../context/TasksContext";

const stats = [
  {
    title: "total",
    value: 24,
    change: 12,
  },
  {
    title: "progress",
    value: 8,
    change: 5,
  },
  {
    title: "completed",
    value: 12,
    change: 18,
  },
  {
    title: "overdue",
    value: 4,
    change: 8,
  },
];

const Dashboard = () => {
  // const [tasks, setTasks] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [taskToDelete, setTaskToDelete] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  // async function fetchTasks() {
  //   setIsLoading(true);
  //   try {
  //     const data = await getTasks();
  //     setTasks(data);
  //     toast.success("Tasks fetched successfully!");
  //   } catch (error) {
  //     toast.error("Failed to get tasks, Please try again.");
  //     console.log(error.status);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // async function taskRemoval(id) {
  //   setIsLoading(true);
  //   try {
  //     await deleteTask(id);
  //     await fetchTasks();
  //     toast.success("Task deleted successfully!");
  //   } catch (error) {
  //     toast.error("Failed to delete tasks, Please try again.");
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // async function handleTaskCreated() {
  //   await fetchTasks();
  //   setIsModalOpen(false);
  // }

  // function handleDelete(task) {
  //   setTaskToDelete(task);
  // }

  // async function handleConfirmDelete() {
  //   await taskRemoval(taskToDelete.id);
  //   setTaskToDelete(null);
  // }

  // function handleCancelDelete() {
  //   setTaskToDelete(null);
  // }

  async function handleTaskCreated() {
    await fetchTasks();
    setIsModalOpen(false);
  }

  const {
    taskToDelete,
    handleConfirmDelete,
    handleCancelDelete,
    isEditing,
    tasks,
    isLoading,
    handleDelete,
    setIsEditing,
    fetchTasks,
    isModalOpen,
    setIsModalOpen
  } = useTasks();

  return (
    <main className={style.dashboard}>
      <Sidebar />
      <section
        className="d-flex flex-column px-4 py-3"
        style={{ width: "calc(100% - 250px)", left: "250px", position: "relative" }}
      >
        {isModalOpen && (
          <Modal>
            <AddTaskForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onSuccess={handleTaskCreated}
            />
          </Modal>
        )}
        {taskToDelete && (
          <Modal>
            <Confirmation
              approve="Yes"
              reject="No"
              onApprove={handleConfirmDelete}
              onReject={handleCancelDelete}
            >
              Are you sure you want to delete this task?
            </Confirmation>
          </Modal>
        )}
        {isEditing && (
          <Modal>
            <AddTaskForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onSuccess={handleTaskCreated}
            />
          </Modal>
        )}
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className={`${style.statsRow} mt-4`}>
          {stats.map(({ title, value, change }) => {
            return <StatsCards key={title} title={title} value={value} change={change} />;
          })}
          <CompletionChart />
        </div>
        <div className={`${style.charts} mt-4`}>
          <OverViewChart />
          <PriorityChart data={tasks} />
        </div>
        <div>
          <TasksTable
            tasks={tasks}
            isLoading={isLoading}
            handleDelete={handleDelete}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
