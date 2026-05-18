import style from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={`${style.button} ${style[`${type}Btn`]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
