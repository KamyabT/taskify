import style from "./Button.module.css";

const Button = ({ children, type, onClick, disable }) => {
  console.log(disable , "disable")
  return (
    <button
      className={`${style.button} ${disable ? style.disableStyle : style[`${type}Btn`]}`}
      onClick={onClick}
      disabled={disable? disable : false}
    >
      {children}
    </button>
  );
};

export default Button;
