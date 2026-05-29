import api from "./api";

export async function createTask(taskData) {
  console.log("Creating task with data:", taskData);
  const response = await api.post("/collections/tasks/records", taskData);
  return response.data;
}
