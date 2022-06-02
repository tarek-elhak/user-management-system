import { useState } from "react";
import classes from "./SideBarItem.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SideBarList from "../../components/SideBar/SideBarList/SideBarList";

const SideBarItem = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const sideBarItemClickedHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className={classes.SideBarItem}>
      <div
        className={[
          props.extendible && classes.Extendible,
          showMenu ? classes.ActiveItem : "",
        ].join(" ")}
        onClick={props.extendible ? sideBarItemClickedHandler : undefined}
      >
        <h2>
          <span className={classes.SideBarItemIcon}>{props.icon}</span>
          {props.children}
        </h2>

        {props.extendible &&
          (showMenu ? (
            <KeyboardArrowUpIcon className={classes.SideBarItemArrowIcon} />
          ) : (
            <KeyboardArrowDownIcon className={classes.SideBarItemArrowIcon} />
          ))}
      </div>

      {showMenu && props.items ? <SideBarList items={props.items} /> : null}
    </div>
  );
};

export default SideBarItem;
