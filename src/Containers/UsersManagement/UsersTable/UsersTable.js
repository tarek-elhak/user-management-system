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
        <tr>
          <td>tarek</td>
          <td>tarek-abdelhak</td>
          <td>tarek@google.com</td>
          <td>office</td>
          <td>active</td>
          <td>{JSON.stringify(new Date())}</td>
        </tr>
        <tr>
          <td>tarek</td>
          <td>tarek-abdelhak</td>
          <td>tarek@google.com</td>
          <td>office</td>
          <td>active</td>
          <td>{JSON.stringify(new Date())}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default UsersTable;
