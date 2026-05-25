import Button from "../../../components/ui/Button";
import taskStyles from "../../../utils/taskStyles";
import style from "./TaskRow.module.css";
import { SquarePen, Trash2 } from "lucide-react";
import { format, formatDistance } from "date-fns";
// import { format, formatDistance } from "date-fns-jalali";
// import { faIR } from "date-fns-jalali/locale";

const TaskRow = ({ task, handleDelete }) => {
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
        <span className={`${style.badge} ${style[taskStyles.status[task.status]]}`}>
          {task.status}
        </span>
      </div>
      <div className="">
        <span className={`${style.date}`}>{format(task.dueDate, "dd/MM/yyyy")}</span>
      </div>
      <div className="">
        <span className={`${style.date}`}>{format(task.dueDate, "dd/MM/yyyy")}</span>
      </div>
      <div className="">
        <span
          className={`${style.date}`}
          
        >
          {formatDistance(new Date(task.dueDate), new Date(), {
              addSuffix: true,
            })}
        </span>
      </div>
      <div className="">
        <Button type="iconAction">
          <SquarePen color="var(--text-secondary)" size={24} />
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
