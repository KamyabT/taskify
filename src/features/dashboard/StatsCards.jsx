import style from "./StatsCards.module.css";

const StatsCards = ({ icon, title, value, change, backColor }) => {
  return (
    <div className={style.cards} style={{}}>
      <div className="p-2" style={{ backgroundColor: backColor, borderRadius: "8px" }}>
        <span>{icon}</span>
      </div>
      <div>
        <p className="text-section" style={{ color: "var(--text-secondary)" }}>
          {title}
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
