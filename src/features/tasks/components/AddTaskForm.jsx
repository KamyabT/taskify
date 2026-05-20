import { useState } from "react";
import style from "./AddTaskForm.module.css";
import Button from "../../../components/ui/Button";
import { createTask } from "../../../services/createTask";
import {
  Bell,
  Flag,
  Tag,
  Calendar,
  Captions,
  NotepadText,
  CircleCheck,
  CircleX,
} from "lucide-react";

const AddTaskForm = ({ isModalOpen, setIsModalOpen }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskProject, setTaskProject] = useState("Frontend");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskStatus, setTaskStatus] = useState("To Do");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskTags, setTaskTags] = useState("");

  function handleCreateTask(e) {
    e.preventDefault();
    console.log("submit clicked");
    const newRecord = {
      title: taskTitle,
      description: taskDescription,
      dueData: taskDueDate,
      priority: taskPriority,
      status: taskStatus,
      project: taskProject,
      projectTag: taskTags,
    };
    console.log(newRecord, "new record before sending to api");
    createTask(newRecord);
  }

  return (
    <form onSubmit={(e) => handleCreateTask(e)}>
      <div className={`${style.header} d-flex justify-content-between`}>
        <div>
          <h5 className="text-title-medium">Add New Task</h5>
          <p className="text-description">
            Create a new task to track and manage your work
          </p>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => setIsModalOpen(!isModalOpen)}>
          <CircleX />
        </div>
      </div>
      <div className={`${style.taskTitle} d-flex flex-column`}>
        <label
          className={`${style.sectionTypo} d-flex align-items-center mb-2`}
          htmlFor=""
        >
          <Captions size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Task Title
        </label>
        <input
          className="input"
          type="text"
          placeholder="Enter task title..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div className={`${style.description} d-flex flex-column`}>
        <label
          className={`${style.sectionTypo} d-flex align-items-center mb-2`}
          htmlFor=""
        >
          <NotepadText size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Description
        </label>
        <textarea
          className="input"
          rows="4"
          cols="50"
          placeholder="Enter task description (optional)"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={`${style.projectContainter} d-flex flex-grow-1`}>
        <div className="d-flex flex-column flex-grow-1">
          <label
            className={`${style.sectionTypo} d-flex align-items-center mb-2`}
            htmlFor=""
          >
            <Calendar size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Project
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
            value={taskProject}
            onChange={(e) => setTaskProject(e.target.value)}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label
            className={`${style.sectionTypo} d-flex align-items-center mb-2`}
            htmlFor=""
          >
            <Flag size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Priority
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <div className={`${style.statusContainer} d-flex flex-grow-1`}>
        <div className="d-flex flex-column flex-grow-1">
          <label
            className={`${style.sectionTypo} d-flex align-items-center mb-2`}
            htmlFor=""
          >
            <CircleCheck size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Status
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label
            className={`${style.sectionTypo} d-flex align-items-center mb-2`}
            htmlFor=""
          >
            <Calendar size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Due Date
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
          ></select>
        </div>
      </div>
      <div className={`${style.tags} d-flex flex-column`}>
        <label
          className={`${style.sectionTypo} d-flex align-items-center mb-2`}
          htmlFor=""
        >
          <Tag size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Tags (Optional)
        </label>
        <input
          className="input"
          type="text"
          placeholder="Add tags..."
          value={taskTags}
          onChange={(e) => setTaskTags(e.target.value)}
        />
      </div>
      <Button type="transparentAction">
        <Bell size={18} color="#a5aebf" />
        <span style={{ marginLeft: "8px", fontSize: "14px" }}>Set reminder</span>
      </Button>
      <div className="d-flex justify-content-end">
        <Button type="Cancel" onClick={() => setIsModalOpen(!isModalOpen)}>
          Cancel
        </Button>
        <Button type="Submit">Create Task +</Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
