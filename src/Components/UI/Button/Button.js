import classes from "./Button.module.css";
const Button = (props) => {
  const classNames = [classes.Button, props.primary && classes.Primary];
  return (
    <button className={classNames.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
