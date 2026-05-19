import style from "./AddTaskForm.module.css";
import Button from "../../../components/ui/Button";

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
          X
        </div>
      </div>
      <div className={`${style.taskTitle} d-flex flex-column`}>
        <label htmlFor="">Task Title</label>
        <input className="input" type="text" placeholder="Enter task title..." />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="">Description</label>
        <input
          className="input"
          type="text"
          placeholder="Enter task description (optional)"
        />
      </div>
      <div className="d-flex flex-grow-1">
        <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="">Project</label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
          ></select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="">Priority</label>
          <select className={`${style.select} text-card-label me-3`} name="" id="">
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="">Status</label>
          <select className={`${style.select} text-card-label me-3`} name="" id="">
            <option value="">To Do</option>
            <option value="">In-Progress</option>
            <option value="">Completed</option>
            <option value="">Overdue</option>
          </select>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="">Due Date</label>
          <select
            className={`${style.select} text-card-label me-3`}
            name=""
            id=""
          ></select>
        </div>
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="">Tags (Optional)</label>
        <input className="input" type="text" placeholder="Add tags..." />
      </div>
      <button>Set reminder</button>
      <div className="d-flex justify-content-end">
        <Button type="cancel">Cancel</Button>
        <Button type="submit">Create Task +</Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
