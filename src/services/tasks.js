import api from "./api";

export async function getTasks() {
  const response = await api.get("/collections/tasks/records");

  return response.data.items;
}

export async function deleteTask(id) {
  const response = await api.delete(`/collections/tasks/records/${id}`);

  console.log(response, " after delete");
  return response.data;
}
