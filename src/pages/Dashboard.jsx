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
import Confirmation from "../components/ui/Confirmation/Confirmation";
import { useTasks } from "../context/TasksContext";
import { isThisMonth, isSameMonth, subMonths } from "date-fns";

const stats = [
  { title: "total", value: 24, change: 12 },
  { title: "progress", value: 8, change: 5 },
  { title: "completed", value: 12, change: 18 },
  { title: "overdue", value: 4, change: 8 },
];

const Dashboard = () => {
  const {
    tasks,
    isModalOpen,
    setIsModalOpen,
    taskToDelete,
    taskToEdit,
    handleConfirmDelete,
    handleCancelDelete,
    handleTaskCreated,
    handleTaskEdited,
    setTaskToEdit,
    thisMonthTotalTasks,
    lastMonthTotalTasks,
    thisMonthInProgressTasks,
    lastMonthInProgressTasks,
    thisMonthCompletedTasks,
    lastMonthCompletedTasks,
    thisMonthOverdueTasks,
    lastMonthOverdueTasks,
  } = useTasks();

  /**************Stats Logic***************/

  const currentMonthTasks = tasks.filter((task) => {
    return isThisMonth(new Date(task.created));
  });

  const perviousMonthTasks = tasks.filter((task) => {
    return isSameMonth(new Date(task.created), subMonths(new Date(), 1));
  });

  let statsData = [
    {
      title: "total",
      value: thisMonthTotalTasks,
      change:
        lastMonthTotalTasks > 0
          ? (
              ((thisMonthTotalTasks - lastMonthTotalTasks) / lastMonthTotalTasks) *
              100
            ).toFixed(0)
          : thisMonthTotalTasks * 100,
    },
    {
      title: "progress",
      value: thisMonthInProgressTasks,
      change:
        lastMonthInProgressTasks > 0
          ? (
              (thisMonthInProgressTasks -
                lastMonthInProgressTasks / lastMonthInProgressTasks) *
              100
            ).toFixed(0)
          : thisMonthInProgressTasks * 100,
    },
    {
      title: "completed",
      value: thisMonthCompletedTasks,
      change:
        lastMonthCompletedTasks > 0
          ? (
              ((thisMonthCompletedTasks - lastMonthCompletedTasks) /
                lastMonthCompletedTasks) *
              100
            ).toFixed(0)
          : thisMonthCompletedTasks * 100,
    },
    {
      title: "overdue",
      value: thisMonthOverdueTasks,
      change:
        lastMonthOverdueTasks > 0
          ? (
              ((thisMonthOverdueTasks - lastMonthOverdueTasks) / lastMonthOverdueTasks) *
              100
            ).toFixed(0)
          : thisMonthOverdueTasks * 100,
    },
  ];

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
              onSuccess={handleTaskCreated}
              onClose={() => setIsModalOpen(false)}
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
        {taskToEdit && (
          <Modal>
            <AddTaskForm
              taskToEdit={taskToEdit}
              onSuccess={handleTaskEdited}
              onClose={() => setTaskToEdit(null)}
            />
          </Modal>
        )}

        <Header
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Dashboard"
        />
        <div className={`${style.statsRow} mt-4`}>
          {statsData.map((statCard) => (
            <StatsCards statCard={statCard} />
          ))}
          <CompletionChart />
        </div>
        <div className={`${style.charts} mt-4`}>
          <OverViewChart />
          <PriorityChart data={tasks} />
        </div>
        <div>
          <TasksTable />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
