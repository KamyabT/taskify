import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import CompletionChart from "../features/dashboard/CompletionChart";
import StatsCards from "../features/dashboard/StatsCards";
import TasksTable from "../features/tasks/components/TasksTable";
import style from "./Dashboard.module.css";

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
      <section className="d-flex flex-column px-4 py-3" style={{ width: "100vw" }}>
        <Header />
        <div className={`${style.statsRow} mt-4 flex-wrap`}>
          <div className={style.cardsWrapper}>
            {stats.map(({ title, value, change }) => {
              return (
                <StatsCards key={title} title={title} value={value} change={change} />
              );
            })}
          </div>
          <div className={style.chartWrapper}>
            <CompletionChart />
          </div>
        </div>
        <div>
          <TasksTable />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
