import { useEffect, useState } from "react";
import SideBarItem from "../../Containers/SideBarItem/SideBarItem";
import SideBarTitle from "./SideBarTitle/SideBarTitle";
import RenoSystemsLogo from "../../assets/images/reno-systems.png";
import classes from "./SideBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SideBarData from "../../data/SideBar";

const SideBar = (props) => {
  const [quickAccess, setQuickAccess] = useState("");
  const [sideBarData, setSideBarData] = useState(SideBarData);

  const quickAccessChangedHandler = (e) => {
    setQuickAccess(e.target.value);
  };

  useEffect(() => {
    if (quickAccess === "") {
      setSideBarData(SideBarData);
    } else {
      setSideBarData(
        SideBarData.filter(
          (item) =>
            item.name.toUpperCase().includes(quickAccess.toUpperCase()) ||
            item.items.includes(quickAccess.toLowerCase())
        )
      );
    }
  }, [quickAccess]);

  return (
    <aside
      className={[
        classes.SideBar,
        !props.sideBarShown && classes.ShrinkSideBar,
      ].join(" ")}
    >
      <img
        src={RenoSystemsLogo}
        alt="reno systems logo"
        className={classes.SideBarLogo}
      />
      <div className={classes.QuickAccess}>
        <input
          type="search"
          id="QuickAccess"
          placeholder="Quick access"
          value={quickAccess}
          onChange={quickAccessChangedHandler}
          className={classes.QuickAccessInput}
        />
        <label htmlFor="QuickAccess">
          <SearchOutlinedIcon className={classes.SearchIcon} />
        </label>
      </div>

      <SideBarItem icon={<DashboardIcon />}>dashboard</SideBarItem>
      <SideBarTitle>settings</SideBarTitle>
      {sideBarData.map((item) => (
        <SideBarItem
          key={item.name}
          extendible={item.extendible}
          items={item.items}
        >
          {item.name}
        </SideBarItem>
      ))}
    </aside>
  );
};

export default SideBar;
