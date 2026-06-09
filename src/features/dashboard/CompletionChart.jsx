import style from "./CompletionChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { name: "Completed", value: 12 },
  { name: "Remaining", value: 12 },
];

const COLORS = ["#6366F1", "#E5E7EB"];

const CompletionChart = () => {
  const [period, setPeriod] = useState("day");

  return (
    <div className={style.CompletionChart}>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-card-value-medium">Completion Rate</p>
        <select
          className={`${style.select} text-card-label`}
          name=""
          id=""
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
          <option value="day">This Day</option>
        </select>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div style={{ width: "120px", height: "120px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={35}
                outerRadius={55}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="d-flex flex-column">
          <p className="text-card-value">50%</p>
          <span className="text-card-value-small">12 of 24 tasks</span>
          <span className="text-card-label">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CompletionChart;
