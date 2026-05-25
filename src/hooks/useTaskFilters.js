import { useReducer } from "react";

import { filtersReducer, initialState } from "../reducers/filtersReducer";

export function useTaskFilters(tasks) {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  let filteredTasks = [...tasks];

  filteredTasks = filteredTasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.project.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  if (filters.status !== "all") {
    filteredTasks = filteredTasks.filter((task) => task.status === filters.status);
  }

  if (filters.priority !== "all") {
    filteredTasks = filteredTasks.filter((task) => task.priority === filters.priority);
  }

  if (filters.sortBy === "closestDueDate") {
    filteredTasks.sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
  }

  if (filters.sortBy === "status") {
    const statusOrder = {
      Overdue: 1,
      "To Do": 2,
      "In-Progress": 3,
      Completed: 4,
    };

    filteredTasks.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  }

  if (filters.sortBy === "priority") {
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    filteredTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  }

  return {
    filters,
    filteredTasks,
    dispatch,
  };

  //   if (filters.sortBy === "newest") {
  //     filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //   }
}
