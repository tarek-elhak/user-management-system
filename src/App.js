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

const usersReducer = (users, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return [...users, action.user];
    default:
      throw new Error("this shoudn't be reached !");
  }
};

function App() {
  const [users, dispatchUserAction] = useReducer(usersReducer, []);
  const [showNewUserModal, setShowNewUserModal] = useState(false);

  const closeNewUserModalHandler = () => {
    setShowNewUserModal(false);
  };

  const showNewUserModalHandler = () => {
    setShowNewUserModal(true);
  };

  const addNewUser = (user) => {
    user.id = nanoid();
    user.createdOn = getCurrentDate();
    user.status = getStatus();
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
      <UsersManagement users={users} />
    </div>
  );
}

export default App;
