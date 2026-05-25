import style from "./TableHeader.module.css";

const TableHeader = () => {
  return (
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
        <h6>Created</h6>
      </div>
      <div className="">
        <h6>Due</h6>
      </div>
      <div className="">
        <h6>Timeline</h6>
      </div>
      <div className="">
        <h6>Actions</h6>
      </div>
    </div>
  );
};

export default TableHeader;
