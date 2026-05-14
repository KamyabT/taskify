import style from "./TaskRow.module.css";
import Button from "../../../components/ui/Button";
import { SquarePen, Trash2 } from "lucide-react";
import TableHeader from "./TableHeader";
import tasks from "../../../data/tasks";

const TaskRow = () => {
  return (
    <>
      <TableHeader />
      {tasks.map((task) => {
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
              <span className={`${style.badge} ${style.yellowBadge}`}>
                . {task.project}
              </span>
            </div>
            <div className="">
              <span className={`${style.badge} ${style.redBadge}`}>{task.priority}</span>
            </div>
            <div className="">
              <span className={`${style.badge} ${style.successBadge}`}>
                {task.status}
              </span>
            </div>
            <div className="">
              <span className={`${style.date}`}>{task.dueDate}</span>
            </div>
            <div className="">
              <Button type="iconAction">
                <SquarePen color="var(--text-secondary)" size={24} />
              </Button>
              <Button type="iconAction">
                <Trash2 color="var(--text-secondary)" size={24} />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskRow;
