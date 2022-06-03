import { useState } from "react";
import userGroups from "../../data/userGroups";
import userProfiles from "../../data/userProfiles";
import classes from "./NewUserModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../Components/UI/Button/Button";
import Backdrop from "../../Components/UI/BackDrop/BackDrop";

const NewUserModal = (props) => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    userName: "",
    emailAddress: "",
    userGroup: "choose user group",
    userProfile: "choose profile",
  });

  const userInputChangedHandler = (event) => {
    setUserInput((prevUserInputs) => ({
      ...prevUserInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const resetAllUserInputs = () => {
    setUserInput({
      fullName: "",
      userName: "",
      emailAddress: "",
      userGroup: "choose user group",
      userProfile: "choose profile",
    });
  };

  const addNewUserHandler = (event) => {
    event.preventDefault();
    props.addNewUser(userInput);
  };
  return (
    <>
      <Backdrop clicked={props.closeNewUserModal} />
      <article className={classes.NewUserModal}>
        <header>
          <h2>add new user</h2>
          <Button clicked={props.closeNewUserModal}>
            <CloseIcon className={classes.CloseIcon} />
          </Button>
        </header>
        <form>
          <div className={classes.UserInput}>
            <label htmlFor="FullName">full name</label>
            <input
              type="text"
              id="FullName"
              name="fullName"
              placeholder="Enter full name"
              value={userInput.fullName}
              onChange={userInputChangedHandler}
            />
          </div>

          <div className={classes.UserInput}>
            <label htmlFor="UserName">user name</label>
            <input
              type="text"
              id="UserName"
              name="userName"
              placeholder="Enter username"
              value={userInput.userName}
              onChange={userInputChangedHandler}
            />
          </div>
          <div className={classes.UserInput}>
            <label htmlFor="EmailAddress">email address </label>
            <input
              type="email"
              id="EmailAddress"
              name="emailAddress"
              placeholder="Enter user email address"
              value={userInput.emailAddress}
              onChange={userInputChangedHandler}
            />
          </div>
          <div className={classes.UserInput}>
            <label htmlFor="UserGroup">full name</label>
            <select
              id="UserGroup"
              name="userGroup"
              value={userInput.userGroup}
              onChange={userInputChangedHandler}
            >
              <option value="choose user group">choose user group</option>
              {userGroups.map((userGroup) => (
                <option key={userGroup} value={userGroup}>
                  {userGroup}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.UserInput}>
            <label htmlFor="UserProfile">assign profile</label>
            <select
              id="UserProfile"
              name="userProfile"
              value={userInput.userProfile}
              onChange={userInputChangedHandler}
            >
              <option value="choose profile">choose profile</option>
              {userProfiles.map((userProfile) => (
                <option key={userProfile} value={userProfile}>
                  {userProfile}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.FormActions}>
            <Button resetButton clicked={resetAllUserInputs}>
              reset fields
            </Button>
            <div>
              <Button secondary clicked={props.closeNewUserModal}>
                cancel
              </Button>
              <Button primary submit clicked={addNewUserHandler}>
                add user
              </Button>
            </div>
          </div>
        </form>
      </article>
    </>
  );
};

export default NewUserModal;
