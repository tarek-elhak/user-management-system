import UsersFilters from "./UsersFilters/UsersFilters";
import UsersActions from "./UsersActions/UsersActions";
import UsersTable from "./UsersTable/UsersTable";
import classes from "./UsersManagement.module.css";

const UsersManagement = (props) => {
  return (
    <section className={classes.UsersManagement}>
      <UsersFilters filterByUserName={props.filterByUserName} />
      <UsersActions
        users={props.users}
        selectedUsers={props.selectedUsers}
        unSelectAll={props.unSelectAll}
        removeUsers={props.removeUsers}
      />
      <UsersTable
        users={props.users}
        selectUserHandler={props.selectUserHandler}
      />
    </section>
  );
};

export default UsersManagement;
