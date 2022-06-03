import classes from "./StatusBar.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { greeting } from "../../utils/greeting";
import { getCurrentDay } from "../../utils/getCurrentDay";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { getCurrentTime } from "../../utils/getCurrentTime";

const StatusBar = (props) => (
  <div className={classes.StatusBar}>
    <div className={classes.Greeting}>
      <KeyboardArrowLeftIcon className={classes.ArrowIcon} />
      <MenuIcon className={classes.HamburgerIcon} />
      <span className={classes.GreetingMessage}>{greeting()}</span>
      <span className={classes.Now}>{getCurrentDay()}</span>
      <span className={classes.Now}>{getCurrentDate()}</span>
      <span className={classes.Now}>{getCurrentTime()}</span>
    </div>
    <div className={classes.Status}>
      <HelpOutlineIcon className={classes.HelpIcon} />
      <NotificationsIcon className={classes.NotificationIcon} />
      <span className={classes.UserName}>tarek abdelhak</span>
      <div className={classes.Avatar}>ta</div>
      <KeyboardArrowDownIcon className={classes.ArrowIcon} />
    </div>
  </div>
);

export default StatusBar;
