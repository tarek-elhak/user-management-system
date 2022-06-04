import classes from "./StatusBar.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { greeting } from "../../utils/greeting";
import { getCurrentDay } from "../../utils/getCurrentDay";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { getCurrentTime } from "../../utils/getCurrentTime";
import UserAvatar from "../UI/UserAvatar/UserAvatar";
import Button from "../UI/Button/Button";

const StatusBar = (props) => (
  <div
    className={[
      classes.StatusBar,
      !props.sideBarShown && classes.ExpandStatusBar,
    ].join(" ")}
  >
    <div className={classes.Greeting}>
      <Button clicked={props.toggleSideBar}>
        {props.sideBarShown && (
          <KeyboardArrowLeftIcon
            className={[classes.ArrowIcon, classes.LeftArrow].join(" ")}
          />
        )}
        <MenuIcon className={classes.HamburgerIcon} />
        {!props.sideBarShown && (
          <KeyboardArrowRightIcon
            className={[classes.ArrowIcon, classes.RightArrow].join(" ")}
          />
        )}
      </Button>
      <span className={classes.GreetingMessage}>{greeting()}</span>
      <span className={classes.Now}>{getCurrentDay()}</span>
      <span className={classes.Now}>{getCurrentDate()}</span>
      <span className={classes.Now}>{getCurrentTime()}</span>
    </div>
    <div className={classes.Status}>
      <HelpOutlineIcon className={classes.HelpIcon} />
      <NotificationsIcon className={classes.NotificationIcon} />
      <span className={classes.UserName}>tarek abdelhak</span>
      <UserAvatar>ta</UserAvatar>
      <KeyboardArrowDownIcon className={classes.ArrowIcon} />
    </div>
  </div>
);

export default StatusBar;
