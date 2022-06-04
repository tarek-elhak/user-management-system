import classes from "./UserAvatar.module.css";
const UserAvatar = (props) => (
  <div
    className={classes.UserAvatar}
    style={{
      backgroundColor: props.customColor ?? "rgb(224 231 255)",
    }}
  >
    {props.children}
  </div>
);

export default UserAvatar;
