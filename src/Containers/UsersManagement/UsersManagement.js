import UsersFilters from "./UsersFilters/UsersFilters";
import UsersActions from "./UsersActions/UsersActions";
import UsersTable from "./UsersTable/UsersTable";
import classes from "./UsersManagement.module.css";

const UsersManagement = (props) => {
  return (
    <section className={classes.UsersManagement}>
      <UsersFilters />
      <UsersActions />
      <UsersTable users={props.users} />
    </section>
  );
};

export default UsersManagement;
