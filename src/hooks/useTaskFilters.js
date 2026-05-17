import { useReducer } from "react";

import { filtersReducer, initialState } from "../reducers/filtersReducer";

function useTaskFilters(tasks) {
  const [filters, dispatch] = useReducer(filtersReducer, initialState);

  let filteredTasks = [...tasks];

  filteredTasks = filteredTasks.filter((task) => {
    if (!filters.search) return task;
    else {
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.project.toLowerCase().includes(filters.search.toLowerCase());
    }
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

  if (filters.sortBy === "priority") {
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    filteredTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  }

//   if (filters.sortBy === "newest") {
//     filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//   }
}
