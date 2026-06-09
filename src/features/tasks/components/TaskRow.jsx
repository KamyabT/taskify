import { useState } from "react";
import Button from "../../../components/ui/Button";
import taskStyles from "../../../utils/taskStyles";
import style from "./TaskRow.module.css";
import { SquarePen, Trash2, CircleCheck } from "lucide-react";
import { format, formatDistance } from "date-fns";
import { updateTask } from "../../../services/tasks";
import { useTasks } from "../../../context/TasksContext";
// import { format, formatDistance } from "date-fns-jalali";
// import { faIR } from "date-fns-jalali/locale";

const TaskRow = ({ task }) => {
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState(task.status);
  const { handleDelete, isEditing, setIsEditing } = useTasks();

  function handleUpdateStatus() {
    console.log("update status");
    updateTask(task.id, { status: newStatus });
    setIsEditingStatus(!isEditingStatus);
  }

  async function handleComplete() {
    console.log("complete clicked");
    const res = await updateTask(task.id, { status: "Completed" });
    console.log(res);
    setNewStatus(res.status);
  }

  const isCompleted = newStatus === "Completed";

  return (
    <div className={`${style.row}`}>
      <div className="d-flex align-items-center">
        <input type="checkbox" />
      </div>
      <div className="">
        <h6 className={`${style.title}`}>{task.title}</h6>
        <span className={`${style.desc}`}>{task.description}</span>
      </div>
      <div>
        <span
          className={`${style.badge} ${style[taskStyles.projectTag[task.projectTag]]}`}
        >
          . {task.project}
        </span>
      </div>
      <div className="">
        <span className={`${style.badge} ${style[taskStyles.priority[task.priority]]}`}>
          {task.priority}
        </span>
      </div>
      <div className="">
        {isEditingStatus ? (
          <div className="d-flex align-items-center">
            <select
              className={`${style.select}`}
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="Overdue">Overdue</option>
            </select>
            <span className="d-flex align-items-center ms-1">
              <CircleCheck
                size={22}
                className={`${style.cursorPointer}`}
                color="var(--success)"
                onClick={handleUpdateStatus}
              />
            </span>
          </div>
        ) : (
          <span
            className={`${style.badge} ${style[taskStyles.status[newStatus]]} ${style.cursorPointer}`}
            onClick={() => setIsEditingStatus(!isEditingStatus)}
          >
            {newStatus}
          </span>
        )}
      </div>
      <div className="">
        <span className={`${style.date}`}>{format(task.dueDate, "dd/MM/yyyy")}</span>
      </div>
      <div className="">
        <span className={`${style.date}`}>{format(task.dueDate, "dd/MM/yyyy")}</span>
      </div>
      <div className="">
        <span className={`${style.date}`}>
          {formatDistance(new Date(task.dueDate), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
      <div className="">
        <Button type="success" disable={isCompleted} onClick={handleComplete}>
          Complete
        </Button>
        <Button type="iconAction">
          <SquarePen
            color="var(--text-secondary)"
            size={24}
            onClick={() => setIsEditing(!isEditing)}
          />
        </Button>
        <Button type="iconAction">
          <Trash2
            color="var(--text-secondary)"
            size={24}
            onClick={() => handleDelete(task)}
          />
        </Button>
      </div>
    </div>
  );
};

export default TaskRow;
