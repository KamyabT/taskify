import style from "./CompletionChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 12 },
  { name: "Remaining", value: 12 },
];

const COLORS = ["#6366F1", "#E5E7EB"];

const CompletionChart = () => {
  return (
    <div className={style.CompletionChart}>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-card-value-medium">Completion Rate</p>
        <select className={`${style.select} text-card-label`}  name="" id="">
          <option value="">This Month</option>
          <option value="">This Week</option>
          <option value="">This Day</option>
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
