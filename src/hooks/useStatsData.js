import { useTasks } from "../context/TasksContext";
import { isThisMonth, isSameMonth, subMonths } from "date-fns";

export function useStatsData() {
  const { tasks } = useTasks();

  const currentMonthTasks = tasks.filter((task) => {
    return isThisMonth(new Date(task.created));
  });

  const previousMonthTasks = tasks.filter((task) => {
    return isSameMonth(new Date(task.created), subMonths(new Date(), 1));
  });

  const thisMonthInProgressTasks = currentMonthTasks.filter(
    (task) => task.status === "In-Progress",
  ).length;

  const lastMonthInProgressTasks =
    previousMonthTasks.length > 0
      ? previousMonthTasks.filter((task) => task.status === "In-Progress").length
      : 0;

  const thisMonthCompletedTasks = currentMonthTasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const lastMonthCompletedTasks =
    previousMonthTasks.length > 0
      ? previousMonthTasks.filter((task) => task.status === "Completed").length
      : 0;

  const thisMonthOverdueTasks = currentMonthTasks.filter(
    (task) => task.status === "Overdue",
  ).length;
  const lastMonthOverdueTasks =
    previousMonthTasks.length > 0
      ? previousMonthTasks.filter((task) => task.status === "Overdue").length
      : 0;

  const statsData = [
    {
      title: "total",
      value: currentMonthTasks.length,
      change:
        previousMonthTasks.length > 0
          ? (((currentMonthTasks.length - previousMonthTasks.length) /
              previousMonthTasks.length) *
            100).toFixed(0)
          : currentMonthTasks.length * 100,
    },
    {
      title: "progress",
      value: thisMonthInProgressTasks,
      change:
        lastMonthInProgressTasks > 0
          ? (((thisMonthInProgressTasks - lastMonthInProgressTasks) /
              lastMonthInProgressTasks) *
            100).toFixed(0)
          : thisMonthInProgressTasks * 100,
    },
    {
      title: "completed",
      value: thisMonthCompletedTasks,
      change:
        lastMonthCompletedTasks > 0
          ? (((thisMonthCompletedTasks - lastMonthCompletedTasks) /
              lastMonthCompletedTasks) *
            100).toFixed(0)
          : thisMonthCompletedTasks * 100,
    },
    {
      title: "overdue",
      value: thisMonthOverdueTasks,
      change:
        lastMonthOverdueTasks > 0
          ? (((thisMonthOverdueTasks - lastMonthOverdueTasks) / lastMonthOverdueTasks) *
            100).toFixed(0)
          : thisMonthOverdueTasks * 100,
    },
  ];

  return { statsData };
}
