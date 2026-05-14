import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import CompletionChart from "../features/dashboard/CompletionChart";
import StatsCards from "../features/dashboard/StatsCards";
import TasksTable from "../features/tasks/components/TasksTable";
import style from "./Dashboard.module.css";
import OverViewChart from "../features/dashboard/OverViewChart";
import PriorityChart from "../features/dashboard/PriorityChart";

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
  return (
    <main className={style.dashboard}>
      <Sidebar />
      <section
        className="d-flex flex-column px-4 py-3"
        style={{ width: "calc(100% - 300px)", left: "300px", position: "relative" }}
      >
        <Header />
        <div className={`${style.statsRow} mt-4`}>
          {stats.map(({ title, value, change }) => {
            return <StatsCards key={title} title={title} value={value} change={change} />;
          })}
          <CompletionChart />
        </div>
        <div className={`${style.charts} mt-4`}>
          <OverViewChart />
          <PriorityChart />
        </div>
        <div>
          <TasksTable />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
