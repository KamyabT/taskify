import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import CompletionChart from "../features/dashboard/CompletionChart";
import StatsCards from "../features/dashboard/StatsCards";
import style from "./Dashboard.module.css";
import { ClipboardList, Timer, CircleAlert, CircleCheck, icons } from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    icon: <ClipboardList color="var(--primary)" size={38} />,
    value: 24,
    change: 12,
    backColor: "var(--info-light)",
  },
  {
    title: "In Progress",
    icon: <Timer size={38} color={"var(--warning)"} />,
    value: 8,
    change: 5,
    backColor: "var(--warning-light)",
  },
  {
    title: "Completed",
    icon: <CircleCheck size={38} color="var(--success)" />,
    value: 12,
    change: 18,
    backColor: "var(--info-light)",
  },
  {
    title: "Overdue",
    icon: <CircleAlert size={38} color="var(--danger)" />,
    value: 4,
    change: 8,
    backColor: "var(--info-light)",
  },
];

const Dashboard = () => {
  return (
    <main className={style.dashboard}>
      <Sidebar />
      <section className="d-flex flex-column px-4 py-3" style={{ width: "100vw" }}>
        <Header />
        <div className="d-flex w-100  mt-4">
          <div className="d-flex">
            {stats.map(({ icon, title, value, change, backColor }) => {
              return (
                <StatsCards
                  icon={icon}
                  title={title}
                  value={value}
                  change={change}
                  backColor={backColor}
                />
              );
            })}
          </div>
          <div className="w-100">
            <CompletionChart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
