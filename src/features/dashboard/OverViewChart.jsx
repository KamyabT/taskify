import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

import style from "./OverViewChart.module.css";

const data = [
  // { name: "May 1", tasks: 4 },
  // { name: "May 5", tasks: 8 },
  // { name: "May 10", tasks: 13 },
  // { name: "May 15", tasks: 11 },
  // { name: "May 20", tasks: 19 },
  // { name: "May 25", tasks: 10 },
  // { name: "May 30", tasks: 15 },
];

const OverViewChart = () => {
  return (
    <section className={style.chartCard}>
      <div className={style.header}>
        <h5>Tasks Overview</h5>
        {data.length <= 0 ? null : (
          <select className={`${style.select} text-card-label`}>
            <option value="">This Month</option>
            <option value="">This Week</option>
            <option value="">This Day</option>
          </select>
        )}
      </div>

      {data.length <= 0 ? (
        <div className={style.noData}>
          <p className="text-center text-card-value-medium">No tasks yet.</p>
          <p className="text-center text-card-value-medium">Create your first task to see activity and progress here.</p>
        </div>
      ) : (
        <div className={style.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} stroke="#EEF0F6" />

              <XAxis dataKey="name" axisLine={false} tickLine={false} />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="tasks"
                stroke="#6366F1"
                strokeWidth={3}
                fill="url(#colorTasks)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
};

export default OverViewChart;
