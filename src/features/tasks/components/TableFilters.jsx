import Button from "../../../components/ui/Button";
import style from "./TableFilters.module.css";
import { Search } from "lucide-react";

const TableFilters = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-grow-1 mb-4">
      <h6>All Tasks</h6>
      <div className="d-flex justify-content-between" style={{ position: "relative" }}>
        <Search size={16} className={style.icon} />
        <input
          className={`${style.searchBox} me-4`}
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <select className="select text-card-label me-3" name="" id="" value>
            <option value="all-status">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">InProgress</option>
            <option value="done">Done</option>
          </select>
          <select className="select text-card-label me-3" name="" id="" value>
            <option value="all-priorities">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select className="select text-card-label me-3" name="" id="" value>
            <option value="newest">Sort by: Newest</option>
            <option value="closestDueDate">Sort by: Date</option>
            <option value="priority">Sort by: Priority</option>
            <option value="status">Sort by: Status</option>
          </select>
          <Button type="danger">Clear Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
