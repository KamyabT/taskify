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
        <div className="">
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
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <h6>Design new landing page</h6>
          <span>Create a modern and responsive landing page for</span>
        </div>
        <div className="">
          <p>. Website Redesign</p>
        </div>
        <div className="">
          <p>High</p>
        </div>
        <div className="">
          <p>In Progress</p>
        </div>
        <div className="">
          <p>May 25, 2024</p>
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
