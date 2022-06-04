import classes from "./UsersTable.module.css";
import CheckIcon from "@mui/icons-material/Check";
import UserAvatar from "../../../Components/UI/UserAvatar/UserAvatar";

const UsersTable = (props) => {
  return (
    <table className={classes.UsersTable}>
      <thead>
        <tr>
          <th>name</th>
          <th>user name</th>
          <th>email address</th>
          <th>group</th>
          <th>status</th>
          <th>created on</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <input
                  className={classes.SelectUserInput}
                  type="checkbox"
                  id={user.id}
                  value={user.id}
                  checked={user.selected}
                  onChange={() => props.selectUserHandler(user.id)}
                />
                <label htmlFor={user.id} className={classes.SelectUserLabel}>
                  <CheckIcon className={classes.CheckIcon} />
                </label>
                <UserAvatar customColor={user.avatarColor}>
                  {user.fullName.substr(0, 2)}
                </UserAvatar>
                {user.fullName}
              </td>
              <td>{user.userName}</td>
              <td>{user.emailAddress}</td>
              <td>{user.userGroup}</td>
              <td>{user.status}</td>
              <td>{user.createdOn}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UsersTable;
