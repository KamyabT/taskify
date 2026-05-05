import style from "./StatsCards.module.css";
import { ClipboardList, Timer, CircleAlert, CircleCheck } from "lucide-react";

const configs = {
  total: {
    title: "Total Tasks",
    icon: <ClipboardList color="var(--primary)" size={38} />,
    value: 24,
    change: 12,
    backColor: "var(--info-light)",
  },
  progress: {
    title: "In Progress",
    icon: <Timer size={38} color={"var(--warning)"} />,
    value: 8,
    change: 5,
    backColor: "var(--warning-light)",
  },
  completed: {
    title: "Completed",
    icon: <CircleCheck size={38} color="var(--success)" />,
    value: 12,
    change: 18,
    backColor: "var(--info-light)",
  },
  overdue: {
    title: "Overdue",
    icon: <CircleAlert size={38} color="var(--danger)" />,
    value: 4,
    change: 8,
    backColor: "var(--info-light)",
  },
};

const StatsCards = ({ title, value, change }) => {
  const data = configs[title]

  return (
    <div className={style.cards} style={{}}>
      <div className="p-2" style={{ backgroundColor: data.backColor , borderRadius: "8px" }}>
        <span>{data.icon}</span>
      </div>
      <div>
        <p className="text-section" style={{ color: "var(--text-secondary)" }}>
          {data.title}
        </p>
        <span className="text-card-value">{value}</span>
        <span className="text-small ms-3">%{change}</span>
        <div></div>
        <p className="text-small" style={{ color: "var(--text-secondary)" }}>
          vs last month
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
