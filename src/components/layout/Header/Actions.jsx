import Button from "../../ui/Button";
import { Bell, Moon } from "lucide-react";

const Actions = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="me-4">
        <Bell size={24} color="#a5aebf" />
      </div>
      <div className="me-4">
        <Moon size={24} color="#a5aebf" />
      </div>
      <div>
        <Button type="headerAction" onClick={() => setIsModalOpen(!isModalOpen)}>
          + Add Task
        </Button>
      </div>
    </div>
  );
};

export default Actions;
