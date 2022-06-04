import { useState } from "react";
import classes from "./UsersActions.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import LockIcon from "@mui/icons-material/Lock";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "../../../Components/UI/Button/Button";
import userGroups from "../../../data/userGroups";

const UsersActions = (props) => {
  const [showUserGroups, setShowUserGroups] = useState(false);

  const showUserGroupsHandler = () => {
    setShowUserGroups((prevShowUserGroups) => !prevShowUserGroups);
  };

  const groupChangedHandler = (group) => {
    setShowUserGroups(false);
    props.assignToGroup(group);
  };

  return (
    <div className={classes.UsersActions}>
      <div className={classes.UsersLeftActions}>
        <span className={classes.UsersSelected}>
          {props.selectedUsers} selected
        </span>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <EditIcon />
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction clicked={props.removeUsers}>
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
          <Button usersAction assignAction clicked={showUserGroupsHandler}>
            Assign to Group
          </Button>
          {showUserGroups && (
            <ul className={classes.UserGroups}>
              {userGroups.map((userGroup) => (
                <li
                  key={userGroup}
                  onClick={(e) => groupChangedHandler(userGroup)}
                >
                  {userGroup}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <MoreVertIcon />
          </Button>
        </div>
        <Button usersAction unselectAction clicked={props.unSelectAll}>
          Unselect all
        </Button>
      </div>
      <div className={classes.UsersRightActions}>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <DownloadIcon />
          </Button>
        </div>
        <div className={classes.UsersAction}>
          <Button usersAction>
            <SettingsIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersActions;
