import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import style from "./PriorityChart.module.css";

const data = [
  { name: "High", value: 8, color: "#ff4d6d" },
  { name: "Medium", value: 10, color: "#f59e0b" },
  { name: "Low", value: 6, color: "#22c55e" },
];

const totalValue = data.reduce((acc, item) => acc + item.value, 0);
console.log("Total Value:", totalValue);

const PriorityChart = () => {
  return (
    <div className={style.chartCard}>
      <h5>Tasks Overview</h5>

      <div className={style.chartContent}>
        <div className={style.chartWrapper}>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                paddingAngle={3}
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={style.legend}>
          {data.map((item) => (
            <div key={item.name} className={style.legendItem}>
              <div className="d-flex align-items-center">
                <div className={style.color} style={{ backgroundColor: item.color }} />

                <span className="text-card-value-small ms-2">{item.name}</span>
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
