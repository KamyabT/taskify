import { useReducer, useState } from "react";
import { createTask } from "../services/createTask";
import { createTaskReducer, recordInitialState } from "../reducers/createTaskReducer";

export function useCreateTask(onSuccess) {
  const [newTask, dispatch] = useReducer(createTaskReducer, recordInitialState);
  const [error, setError] = useState(null);

  async function handleCreateTask(e) {
    e.preventDefault();

    try {
      await createTask(newTask);
      onSuccess();
    } catch (err) {
      setError("Failed to create task. Please try again.");
    }
  }

  return { newTask, dispatch, handleCreateTask, error };
}
