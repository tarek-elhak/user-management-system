import classes from "./SideBarListItem.module.css";

const SideBarListItem = (props) => (
  <li
    className={[
      classes.SideBarListItem,
      props.children === "users" && classes.ActiveItem,
    ].join(" ")}
  >
    {props.children}
  </li>
);

export default SideBarListItem;
