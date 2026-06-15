import api from "./api";

export async function getTasks() {
  const response = await api.get("/collections/tasks/records");
  return response.data.items;
}

export async function deleteTask(id) {
  const response = await api.delete(`/collections/tasks/records/${id}`);
  return response.data;
}


export async function updateTask(id , data){
  const response = await api.patch(`/collections/tasks/records/${id}`, data);
  return response.data;
}


export async function createTask(taskData) {
  const response = await api.post("/collections/tasks/records", taskData);
  return response.data;
}