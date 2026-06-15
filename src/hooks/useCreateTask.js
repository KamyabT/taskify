import { useReducer, useState } from "react";
import { createTask, updateTask } from "../services/tasks";
import { createTaskReducer, recordInitialState } from "../reducers/createTaskReducer";

export function useCreateTask(onSuccess, taskId = null) {
  const [newTask, dispatch] = useReducer(createTaskReducer, recordInitialState);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (taskId) {
        await updateTask(taskId, newTask);
      } else {
        await createTask(newTask);
      }
      onSuccess();
    } catch (err) {
      setError("Failed. Please try again.");
    }
  }

  return { newTask, dispatch, handleSubmit, error };
}
