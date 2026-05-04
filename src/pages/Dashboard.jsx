import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import CompletionChart from "../features/dashboard/CompletionChart";
import StatsCards from "../features/dashboard/StatsCards";
import style from "./Dashboard.module.css";
import { ClipboardList, Timer, CircleAlert, CircleCheck } from "lucide-react";

const Dashboard = () => {
  return (
    <main className={style.dashboard}>
      <Sidebar />
      <section className="d-flex flex-column px-4 py-3" style={{ width: "100vw" }}>
        <Header />
        <div className="d-flex w-100  mt-4">
          <div className="d-flex">
            <StatsCards
              icon={<ClipboardList size={38} color="var(--primary)" />}
              title={"Total Tasks"}
              value={24}
              change={12}
              backColor={"var(--info-light)"}
            />
            <StatsCards
              icon={<Timer size={38} color={"var(--warning)"} />}
              title={"In Progress"}
              value={8}
              change={5}
              backColor={"var(--warning-light)"}
            />
            <StatsCards
              icon={<CircleCheck size={38} color="var(--success)" />}
              title={"Completed"}
              value={12}
              change={18}
              backColor={"var(--success-light)"}
            />
            <StatsCards
              icon={<CircleAlert size={38} color="var(--danger)" />}
              title={"Overdue"}
              value={4}
              change={8}
              backColor={"var(--danger-light)"}
            />
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
