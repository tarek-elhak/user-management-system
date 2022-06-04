import { useReducer, useState } from "react";
import "./App.module.css";
import SideBar from "./Components/SideBar/SideBar";
import StatusBar from "./Components/StatusBar/StatusBar";
import Hero from "./Components/Hero/Hero";
import UsersManagement from "./Containers/UsersManagement/UsersManagement";
import NewUserModal from "./Containers/NewUserModal/NewUserModal";
import { getCurrentDate } from "./utils/getCurrentDate";
import { nanoid } from "nanoid";
import { getStatus } from "./utils/getStatus";
import { getRandomColor } from "./utils/getRandomColor";

const usersReducer = (users, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return [...users, action.user];
    case "TOGGLE_SELECT_USER":
      return users.map((user) =>
        user.id === action.userId ? { ...user, selected: !user.selected } : user
      );
    case "UNSELECT_ALL":
      return users.map((user) =>
        user.selected ? { ...user, selected: false } : user
      );
    case "FILTER_BY_USERNAME":
      return users.filter((user) =>
        user.userName.toUpperCase().includes(action.username.toUpperCase())
      );
    case "REMOVE_SELECTED_USERS":
      return users.filter((user) => !user.selected);
    default:
      throw new Error("this shoudn't be reached !");
  }
};

function App() {
  const [users, dispatchUserAction] = useReducer(usersReducer, []);

  const [showNewUserModal, setShowNewUserModal] = useState(false);

  const selectUserHandler = (id) => {
    dispatchUserAction({ type: "TOGGLE_SELECT_USER", userId: id });
  };

  const removeSelectedUsersHandler = () => {
    dispatchUserAction({ type: "REMOVE_SELECTED_USERS" });
  };

  const numberOfSelectedUsers = () => {
    return users.filter((user) => user.selected).length;
  };

  const closeNewUserModalHandler = () => {
    setShowNewUserModal(false);
  };

  const showNewUserModalHandler = () => {
    setShowNewUserModal(true);
  };

  const unSelectAllHandler = () => {
    dispatchUserAction({ type: "UNSELECT_ALL" });
  };

  const filterByUserNameHandler = (username) => {
    dispatchUserAction({ type: "FILTER_BY_USERNAME", username });
  };

  const addNewUser = (user) => {
    user.id = nanoid();
    user.createdOn = getCurrentDate();
    user.status = getStatus();
    user.selected = false;
    user.avatarColor = getRandomColor();
    dispatchUserAction({ type: "ADD_NEW_USER", user });
    setShowNewUserModal(false);
  };

  return (
    <div className="App">
      <StatusBar />
      <SideBar />
      <Hero showNewUserModal={showNewUserModalHandler} />
      {showNewUserModal && (
        <NewUserModal
          closeNewUserModal={closeNewUserModalHandler}
          addNewUser={addNewUser}
        />
      )}
      <UsersManagement
        users={users}
        selectUserHandler={selectUserHandler}
        selectedUsers={numberOfSelectedUsers()}
        unSelectAll={unSelectAllHandler}
        filterByUserName={filterByUserNameHandler}
        removeUsers={removeSelectedUsersHandler}
      />
    </div>
  );
}

export default App;
