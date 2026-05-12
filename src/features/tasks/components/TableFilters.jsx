import Button from "../../../components/ui/Button";
import style from "./TableFilters.module.css";
import { Search } from "lucide-react";

const TableFilters = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-grow-1">
      <h6>All Tasks</h6>
      <div className="d-flex justify-content-between" style={{ position: "relative" }}>
        <Search size={16} className={style.icon} />
        <input
          className={`${style.searchBox} me-4`}
          type="text"
          placeholder="Search tasks..."
        />
        <div>
          <select className="select text-card-label me-3" name="" id="">
            <option value="">All Status</option>
            <option value="">Pending</option>
            <option value="">InProgress</option>
            <option value="">Done</option>
          </select>
          <select className="select text-card-label me-3" name="" id="">
            <option value="">All Priorities</option>
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
          </select>
          <select className="select text-card-label me-3" name="" id="">
            <option value="">Sort by: Newest</option>
            <option value="">Sort by: Date</option>
            <option value="">Sort by: Priority</option>
            <option value="">Sort by: Status</option>
          </select>
          <Button type="warning">Clear Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
