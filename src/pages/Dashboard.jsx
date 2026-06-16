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
import { useStatsData } from "../hooks/useStatsData";


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
  } = useTasks();

  /**************Stats Logic***************/

  const { statsData } = useStatsData();

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
          {statsData.map((card) => (
            <StatsCards statCard={card} key={card.title} />
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
