import style from "./AddTaskForm.module.css";
import Button from "../../../components/ui/Button";
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
  return (
    <form>
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
        <input className="input" type="text" placeholder="Enter task title..." />
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
          <select className={`${style.select} text-card-label me-3`} name="" id="">
            <option value="">Frontend</option>
            <option value="">Backend</option>
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
          <select className={`${style.select} text-card-label me-3`} name="" id="">
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
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
          <select className={`${style.select} text-card-label me-3`} name="" id="">
            <option value="">To Do</option>
            <option value="">In-Progress</option>
            <option value="">Completed</option>
            <option value="">Overdue</option>
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
        <input className="input" type="text" placeholder="Add tags..." />
      </div>
      <Button type="taskFormAction">
        <Bell size={18} color="#a5aebf" />
        <span style={{ marginLeft: "8px", fontSize: "14px" }}>Set reminder</span>
      </Button>
      <div className="d-flex justify-content-end">
        <Button type="cancel">Cancel</Button>
        <Button type="submit">Create Task +</Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
