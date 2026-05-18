import Button from "../../../components/ui/Button";
import style from "./TableFilters.module.css";
import { Search } from "lucide-react";

const TableFilters = ({ filters, dispatch }) => {
  console.log(filters, "filters in table filters");
  return (
    <div className="d-flex align-items-center justify-content-between flex-grow-1 mb-4">
      <h6>All Tasks</h6>
      <div className="d-flex justify-content-between" style={{ position: "relative" }}>
        <Search size={16} className={style.icon} />
        <input
          className={`${style.searchBox} me-4`}
          type="text"
          placeholder="Search tasks..."
          value={filters.search}
          onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
        />
        <div>
          <select
            className="select text-card-label me-3"
            name=""
            id=""
            value={filters.status}
            onChange={(e) => {
              dispatch({ type: "SET_STATUS", payload: e.target.value });
            }}
          >
            <option value="all">All Status</option>
            <option value="To Do">To Do</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
          <select
            className="select text-card-label me-3"
            name=""
            id=""
            value={filters.priority}
            onChange={(e) => dispatch({ type: "SET_PRIORITY", payload: e.target.value })}
          >
            <option value="all">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            className="select text-card-label me-3"
            name=""
            id=""
            value={filters.sortBy}
            onChange={(e) => dispatch({ type: "SET_SORT", payload: e.target.value })}
          >
            <option value="Default">Default</option>
            <option value="newest">Sort by: Newest</option>
            <option value="closestDueDate">Sort by: Date</option>
            <option value="priority">Sort by: Priority</option>
            <option value="status">Sort by: Status</option>
          </select>
          <Button type="danger" onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
