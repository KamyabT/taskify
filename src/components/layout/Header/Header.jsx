import Title from "./Title";
import style from "./Header.module.css";
import Actions from "./Actions";
import SearchInput from "../../ui/SearchInput";

const Header = ({ isModalOpen, setIsModalOpen , title }) => {
  return (
    <header className={style.header}>
      <Title title={title}/>
      <div className={style.searchWrapper}>
        <SearchInput />
      </div>
      <Actions isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </header>
  );
};

export default Header;
