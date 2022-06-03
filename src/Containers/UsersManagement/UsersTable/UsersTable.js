import classes from "./UsersTable.module.css";

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
              <td>{user.fullName}</td>
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
