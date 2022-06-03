import classes from "./Button.module.css";
const Button = (props) => {
  const classNames = [
    classes.Button,
    props.primary && classes.Primary,
    props.filterButton && classes.FilterButton,
    props.allFilters && classes.AllFilters,
    props.usersAction && classes.UsersAction,
    props.assignAction && classes.UsersAssignAction,
    props.unselectActio && classes.UsersUnselectAction,
  ];
  return (
    <button className={classNames.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
