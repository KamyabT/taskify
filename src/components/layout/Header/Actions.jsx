import { Bell, Moon } from "lucide-react";

const Actions = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="me-4">
        <Bell size={24} color="#a5aebf"/>
      </div>
      <div className="me-4">
        <Moon size={24} color="#a5aebf"/>
      </div>
      <div>
        <button className="btn text-white" style={{backgroundColor: "var(--primary)"}}>+ Add Task</button>
      </div>
    </div>
  );
};

export default Actions;
