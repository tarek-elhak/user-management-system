import classes from "./Button.module.css";
const Button = (props) => {
  const classNames = [
    classes.Button,
    props.primary && classes.Primary,
    props.secondary && classes.Secondary,
    props.filterButton && classes.FilterButton,
    props.allFilters && classes.AllFilters,
    props.usersAction && classes.UsersAction,
    props.assignAction && classes.UsersAssignAction,
    props.unselectAction && classes.UsersUnselectAction,
    props.resetButton && classes.ResetButton,
  ];
  return (
    <button
      className={classNames.join(" ")}
      onClick={props.clicked}
      type={props.submit ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
