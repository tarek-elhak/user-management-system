import SideBarItem from "../../Containers/SideBarItem/SideBarItem";
import SideBarTitle from "./SideBarTitle/SideBarTitle";
import RenoSystemsLogo from "../../assets/images/reno-systems.png";
import classes from "./SideBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideBar = (props) => (
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
        className={classes.QuickAccessInput}
      />
      <label htmlFor="QuickAccess">
        <SearchOutlinedIcon className={classes.SearchIcon} />
      </label>
    </div>

    <SideBarItem icon={<DashboardIcon />}>dashboard</SideBarItem>
    <SideBarTitle>settings</SideBarTitle>
    <SideBarItem extendible>ATM settings</SideBarItem>
    <SideBarItem extendible>business setup</SideBarItem>
    <SideBarItem extendible items={["users", "profiles", "groups"]}>
      user management
    </SideBarItem>
    <SideBarItem extendible>license management</SideBarItem>
  </aside>
);

export default SideBar;
