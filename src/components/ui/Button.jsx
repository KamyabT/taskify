import style from "./Button.module.css"


const Button = ({children , type}) => {
  return (
    <button className={`${style.button} ${style[`${type}Btn`]}`}>
      {children}
    </button>
  );
};

export default Button;
