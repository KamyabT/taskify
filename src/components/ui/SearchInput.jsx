import style from "./SearchInput.module.css";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className={style.searchBox}>
      <Search size={16} className={style.icon} />
      <input type="text" placeholder="Search tasks..." />
    </div>
  );
};

export default SearchInput;
