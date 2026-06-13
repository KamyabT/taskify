import { useState } from "react";
import { useTasks } from "../../context/TasksContext";
import { isThisWeek, isThisMonth } from "date-fns";
import { format } from "date-fns";

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

const OverViewChart = () => {
  const [period, setPeriod] = useState("week");

  const { tasks } = useTasks();

  const taskCounts = {};

  const filteredByDate = tasks.filter((task) => {
    if (period === "week") return isThisWeek(new Date(task.created));
    if (period === "month") return isThisMonth(new Date(task.created));
  });

 

  filteredByDate.forEach((task) => {
    const day = format(new Date(task.created), "EEE");

    if (taskCounts[day]) {
      taskCounts[day] += 1;
    } else {
      taskCounts[day] = 1;
    }
  });

 

  const chartData = Object.entries(taskCounts).map((taskDate) => ({
    name: taskDate[0],
    tasks: taskDate[1],
  }));

  return (
    <section className={style.chartCard}>
      <div className={style.header}>
        <h5>Tasks Overview</h5>
        {chartData.length <= 0 ? null : (
          <select
            className={`${style.select} text-card-label`}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        )}
      </div>

      {chartData.length <= 0 ? (
        <div className={style.noData}>
          <p className="text-center text-card-value-medium">No tasks yet.</p>
          <p className="text-center text-card-value-medium">
            Create your first task to see activity and progress here.
          </p>
        </div>
      ) : (
        <div className={style.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
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
