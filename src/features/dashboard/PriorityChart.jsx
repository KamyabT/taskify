import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import tasks from "../../data/tasks";

import style from "./PriorityChart.module.css";

const PriorityChart = () => {
  const groupedData = [
    {
      priority: "High",
      value: tasks.filter((task) => task.priority === "High").length,
      color: "var(--danger)",
    },
    {
      priority: "Medium",
      value: tasks.filter((task) => task.priority === "Medium").length,
      color: "var(--warning)",
    },
    {
      priority: "Low",
      value: tasks.filter((task) => task.priority === "Low").length,
      color: "var(--success)",
    },
  ];

  const totalValue = groupedData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={style.chartCard}>
      <h5>Tasks Overview</h5>

      <div className={style.chartContent}>
        <div className={style.chartWrapper}>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={groupedData}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                paddingAngle={3}
              >
                {groupedData.map((item) => (
                  <Cell key={item.priority} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={style.legend}>
          {groupedData.map((item) => (
            <div key={item.priority} className={style.legendItem}>
              <div className="d-flex align-items-center">
                <div className={style.color} style={{ backgroundColor: item.color }} />

                <span className="text-card-value-small ms-2">{item.priority}</span>
              </div>

              <span className="text-card-value-small">
                {item.value} ({((item.value / totalValue) * 100).toFixed(0)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriorityChart;
