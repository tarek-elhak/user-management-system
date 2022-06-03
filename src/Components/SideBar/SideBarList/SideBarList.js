import SideBarListItem from "../SideBarList/SideBarListItem/SideBarListItem";

import classes from "./SideBarList.module.css";
const SideBarList = (props) => {
  const listItems = props.items.map((item) => (
    <SideBarListItem key={item}>{item}</SideBarListItem>
  ));
  return <ul className={classes.SideBarList}>{listItems}</ul>;
};

export default SideBarList;
