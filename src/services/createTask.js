import axios from "axios";
import api from "./api";

// export async function createTask(taskData) {
//     const response = await api.post("/collections/tasks/records", taskData);
//     return response.data;
// }

export async function createTask(taskData) {
  axios({
    method: "post",
    url: "http://127.0.0.1:8090/api/collections/tasks/records",
    data: taskData,
  });
}
