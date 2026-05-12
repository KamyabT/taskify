import style from "./TableFilters.module.css";
import { Search } from "lucide-react";

const TableFilters = () => {
  return (
    <div className="d-flex justify-content-between">
      <Search size={16} className={style.icon} />
      <input className={style.searchBox} type="text" placeholder="Search tasks..." />
      <div>
        <select className="select text-card-label" name="" id="">
          <option value="">All Status</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select className="select text-card-label" name="" id="">
          <option value="">All Priorities</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select className="select text-card-label" name="" id="">
          <option value="">Sort by: Newest</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button className="btn btn-danger">Clear Filters</button>
      </div>
    </div>
  );
};

export default TableFilters;
