import classes from "./UsersActions.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import LockIcon from "@mui/icons-material/Lock";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "../../../Components/UI/Button/Button";

const UsersActions = (props) => {
  return (
    <div className={classes.UsersActions}>
      <div className={classes.UsersLeftActions}>
        <span className={classes.UsersSelected}>1 selected</span>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <EditIcon />
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <DoNotDisturbIcon />
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <LockIcon />
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction assignAction>
            Assign to Profile
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction assignAction>
            Assign to Group
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <MoreVertIcon />
          </Button>
        </div>
        <Button usersAction unselectActio>
          Unselect all
        </Button>
      </div>
      <div className={classes.UsersRightActions}>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersActions;
