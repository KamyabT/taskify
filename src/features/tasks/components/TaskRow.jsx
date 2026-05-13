import style from "./TaskRow.module.css";
import Button from "../../../components/ui/Button";
import { SquarePen, Trash2 } from "lucide-react";
/*

<SquarePen />
<Trash2 />

*/

const TaskRow = () => {
  return (
    <>
      <div className={`${style.row} ${style.theadDesign}`}>
        <div className="d-flex align-items-center">
          <input type="checkbox" />
        </div>
        <div className="">
          <h6>Task</h6>
        </div>
        <div className="">
          <h6>Project</h6>
        </div>
        <div className="">
          <h6>Priority</h6>
        </div>
        <div className="">
          <h6>Status</h6>
        </div>
        <div className="">
          <h6>Due Date</h6>
        </div>
        <div className="">
          <h6>Actions</h6>
        </div>
      </div>
      <div className={`${style.row}`}>
        <div className="d-flex align-items-center">
          <input type="checkbox" />
        </div>
        <div className="">
          <h6 className={`${style.title}`}>Design new landing page</h6>
          <span className={`${style.desc}`}>
            Create a modern and responsive landing page for
          </span>
        </div>
        <div>
          <span className={`${style.badge} ${style.yellowBadge}`}>
            . Website Redesign
          </span>
        </div>
        <div className="">
          <span className={`${style.badge} ${style.redBadge}`}>High</span>
        </div>
        <div className="">
          <span className={`${style.badge} ${style.successBadge}`}>Completed</span>
        </div>
        <div className="">
          <span className={`${style.date}`}>May 25, 2024</span>
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
      <div className={`${style.row}`}>
        <div className="d-flex align-items-center">
          <input type="checkbox" />
        </div>
        <div className="">
          <h6 className={`${style.title}`}>Design new landing page</h6>
          <span className={`${style.desc}`}>
            Create a modern and responsive landing page for
          </span>
        </div>
        <div>
          <span className={`${style.badge} ${style.purpleBadge}`}>. Backend API</span>
        </div>
        <div className="">
          <span className={`${style.badge} ${style.infoBadge}`}>Low</span>
        </div>
        <div className="">
          <span className={`${style.badge} ${style.pendingBadge}`}>To Do</span>
        </div>
        <div className="">
          <span className={`${style.date}`}>May 25, 2024</span>
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
    </>
  );
};

export default TaskRow;
