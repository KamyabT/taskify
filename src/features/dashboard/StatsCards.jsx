import style from "./StatsCards.module.css";
import { ClipboardList, Timer, CircleAlert, CircleCheck } from "lucide-react";

const configs = {
  total: {
    title: "Total Tasks",
    icon: <ClipboardList color="var(--primary)" size={38} />,
    backColor: "var(--info-light)",
  },
  progress: {
    title: "In Progress",
    icon: <Timer size={38} color={"var(--warning)"} />,
    backColor: "var(--warning-light)",
  },
  completed: {
    title: "Completed",
    icon: <CircleCheck size={38} color="var(--success)" />,
    backColor: "var(--info-light)",
  },
  overdue: {
    title: "Overdue",
    icon: <CircleAlert size={38} color="var(--danger)" />,
    backColor: "var(--info-light)",
  },
};

const StatsCards = ({ statCard }) => {
  const data = configs[statCard.title];

  return (
    <div className={style.cards} style={{}}>
      <div
        className="p-2"
        style={{ backgroundColor: data.backColor, borderRadius: "8px" }}
      >
        <span>{data.icon}</span>
      </div>
      <div>
        <p className="text-section" style={{ color: "var(--text-secondary)" }}>
          {statCard.title}
        </p>
        <span className="text-card-value">{statCard.value}</span>
        <span className="text-small ms-3">%{statCard.change}</span>
        <div></div>
        <p className="text-small" style={{ color: "var(--text-secondary)" }}>
          vs last month
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
