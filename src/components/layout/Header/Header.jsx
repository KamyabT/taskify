import Title from "./Title";
import style from "./Header.module.css";
import Actions from "./Actions";
import SearchInput from "../../ui/SearchInput";

const Header = () => {
  return (
    <header className={style.header}>
      <Title />
      <div className={style.searchWrapper}>
        <SearchInput />
      </div>
      <Actions />
    </header>
  );
};

export default Header;
