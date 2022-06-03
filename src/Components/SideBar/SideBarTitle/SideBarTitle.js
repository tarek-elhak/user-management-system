import classes from "./SideBarTitle.module.css";
const SideBarTitle = (props) => (
  <h3 className={classes.SideBarTitle}>{props.children}</h3>
);

export default SideBarTitle;
