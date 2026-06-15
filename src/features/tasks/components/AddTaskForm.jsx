import { useForm } from "react-hook-form";
import style from "./AddTaskForm.module.css";
import Button from "../../../components/ui/Button";
import { createTask, updateTask } from "../../../services/tasks";
import { format } from "date-fns";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: taskToEdit?.title || "",
      description: taskToEdit?.description || "",
      project: taskToEdit?.project || "",
      priority: taskToEdit?.priority || "High",
      status: taskToEdit?.status || "To Do",
      dueDate: taskToEdit?.dueDate ? format(taskToEdit.dueDate, "yyyy-MM-dd") : "",
      projectTag: taskToEdit?.projectTag || "",
    },
  });

  const isEditing = !!taskToEdit;

  async function onSubmit(data) {
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, data);
      } else {
        await createTask(data);
      }
      onSuccess();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
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
          {...register("description")}
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
            {...register("project", { required: "Project is required" })}
          >
            <option value="">Select project</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          {errors.project && <p className="text-danger">{errors.project.message}</p>}
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <Flag size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Priority
          </label>
          <select
            className={`${style.select} text-card-label me-3`}
            {...register("priority", { required: "Priority is required" })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && <p className="text-danger">{errors.priority.message}</p>}
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
            {...register("status", { required: "Status is required" })}
          >
            <option value="To Do">To Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
          {errors.status && <p className="text-danger">{errors.status.message}</p>}
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label className={`${style.sectionTypo} d-flex align-items-center mb-2`}>
            <Calendar size={18} color="#a5aebf" style={{ marginRight: "8px" }} />
            Due Date
          </label>
          <input
            type="date"
            className="input"
            {...register("dueDate", { required: "DueDate is required" })}
          />
          {errors.dueDate && <p className="text-danger">{errors.dueDate.message}</p>}
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
          {...register("tags")}
        />
      </div>
      <Button type="transparentAction">
        <Bell size={18} color="#a5aebf" />
        <span style={{ marginLeft: "8px", fontSize: "14px" }}>Set reminder</span>
      </Button>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>{null && <p className="text-danger">{11}</p>}</div>
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
