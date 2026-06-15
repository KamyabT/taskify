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

  function countTasksByStatus(tasksList, status) {
    return tasksList.filter((task) => task.status === status).length;
  }

  const thisMonthTotalTasks = currentMonthTasks.length;
  const lastMonthTotalTasks = previousMonthTasks.length;

  const thisMonthInProgressTasks = countTasksByStatus(currentMonthTasks, "In-Progress");
  const lastMonthInProgressTasks = countTasksByStatus(previousMonthTasks, "In-Progress");

  const thisMonthCompletedTasks = countTasksByStatus(currentMonthTasks, "Completed");
  const lastMonthCompletedTasks = countTasksByStatus(previousMonthTasks, "Completed");

  const thisMonthOverdueTasks = countTasksByStatus(currentMonthTasks, "Overdue");
  const lastMonthOverdueTasks = countTasksByStatus(previousMonthTasks, "Overdue");

  function tasksChangeByPercent(thisMonthCount, lastMonthCount) {
    return lastMonthCount > 0
      ? (((thisMonthCount - lastMonthCount) / lastMonthCount) * 100).toFixed(0)
      : thisMonthCount * 100;
  }

  const totalChange = tasksChangeByPercent(
    thisMonthTotalTasks,
    lastMonthTotalTasks,
  );
  const progressChange = tasksChangeByPercent(
    thisMonthInProgressTasks,
    lastMonthInProgressTasks,
  );
  const completedChange = tasksChangeByPercent(
    thisMonthCompletedTasks,
    lastMonthCompletedTasks,
  );
  const overDueChange = tasksChangeByPercent(
    thisMonthOverdueTasks,
    lastMonthOverdueTasks,
  );

  const statsData = [
    {
      title: "total",
      value: thisMonthTotalTasks,
      change: totalChange,
    },
    {
      title: "progress",
      value: thisMonthInProgressTasks,
      change: progressChange,
    },
    {
      title: "completed",
      value: thisMonthCompletedTasks,
      change: completedChange,
    },
    {
      title: "overdue",
      value: thisMonthOverdueTasks,
      change: overDueChange,
    },
  ];

  return { statsData };
}
