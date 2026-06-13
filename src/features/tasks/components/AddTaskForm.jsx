import { useEffect } from "react";
import style from "./AddTaskForm.module.css";
import Button from "../../../components/ui/Button";
import { format } from "date-fns";
import { useCreateTask } from "../../../hooks/useCreateTask";
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

const AddTaskForm = ({ taskToEdit, onSuccess, onClose }) => {
  const isEditing = !!taskToEdit;
  const { newTask, dispatch, handleSubmit, error } = useCreateTask(
    onSuccess,
    taskToEdit?.id,
  );


  useEffect(() => {
    if (taskToEdit) {
      dispatch({ type: "SET_TITLE", payload: taskToEdit.title });
      dispatch({ type: "SET_DESCRIPTION", payload: taskToEdit.description });
      dispatch({ type: "SET_STATUS", payload: taskToEdit.status });
      dispatch({ type: "SET_PRIORITY", payload: taskToEdit.priority });
      dispatch({ type: "SET_DUE_DATE", payload: format(taskToEdit.dueDate, "yyyy-MM-dd") });
      dispatch({ type: "SET_PROJECT", payload: taskToEdit.project });
      dispatch({ type: "SET_TAGS", payload: taskToEdit.projectTag });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${style.header} d-flex justify-content-between`}>
        <div>
          <h5 className="text-title-medium">
            {isEditing ? "Edit Task" : "Add New Task"}
          </h5>
          <p className="text-description">
            {isEditing
              ? "Update your task details"
              : "Create a new task to track and manage your work"}
          </p>
        </div>
        <div style={{ cursor: "pointer" }} onClick={onClose}>
          <CircleX />
        </div>
      </div>
      <div className={`${style.taskTitle} d-flex flex-column`}>
        <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
          <Captions size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Task Title
        </label>
        <input
          className="input"
          type="text"
          placeholder="Enter task title..."
          value={newTask.title}
          onChange={(e) => dispatch({ type: "SET_TITLE", payload: e.target.value })}
        />
      </div>
      <div className={`${style.description} d-flex flex-column`}>
        <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
          <NotepadText size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Description
        </label>
        <textarea
          className="input"
          rows="4"
          cols="50"
          placeholder="Enter task description (optional)"
          value={newTask.description}
          onChange={(e) => dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })}
        />
      </div>
      <div className={`${style.projectContainter} d-flex flex-grow-1`}>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <Calendar size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Project
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            value={newTask.project}
            onChange={(e) => dispatch({ type: "SET_PROJECT", payload: e.target.value })}
            required
          >
            <option value="">Select project</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <Flag size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Priority
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            value={newTask.priority}
            onChange={(e) => dispatch({ type: "SET_PRIORITY", payload: e.target.value })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <div className={`${style.statusContainer} d-flex flex-grow-1`}>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <CircleCheck size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Status
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            value={newTask.status}
            onChange={(e) => dispatch({ type: "SET_STATUS", payload: e.target.value })}
          >
            <option value="To Do">To Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <Calendar size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Due Date
          </label>
          <input
            type="date"
            className="input"
            value={newTask.dueDate}
            onChange={(e) => dispatch({ type: "SET_DUE_DATE", payload: e.target.value })}
            required
          />
        </div>
      </div>
      <div className={`${style.tags} d-flex flex-column`}>
        <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
          <Tag size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
          Tags (Optional)
        </label>
        <input
          className="input"
          type="text"
          placeholder="Add tags..."
          value={newTask.projectTag}
          onChange={(e) => dispatch({ type: "SET_TAGS", payload: e.target.value })}
        />
      </div>
      <Button type="transparentAction">
        <Bell size={18} color="#a5aebf" />
        <span style={{ marginLeft: "8px", fontSize: "14px" }}>Set reminder</span>
      </Button>
      <div className="d-flex justify-content-between align-items-center">
        <div>{error && <p className="text-danger">{error}</p>}</div>
        <div>
          <Button type="Cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button type="Submit">{isEditing ? "Save Changes" : "Create Task +"}</Button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
