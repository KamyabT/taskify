import api from "./api";

export async function getTasks() {
  const response = await api.get("/collections/tasks/records");

  return response.data.items;
}
