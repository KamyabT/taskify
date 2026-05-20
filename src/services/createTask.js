import axios from "axios";
import api from "./api";

export async function createTask(taskData) {
    const response = await api.post("/collections/tasks/records", taskData);
    return response.data;
}






