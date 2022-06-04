import { useEffect, useState } from "react";
import classes from "./UsersFilters.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "../../../Components/UI/Button/Button";

const UsersFilters = (props) => {
  const [userName, setUserName] = useState("");

  const userNameChangedHandler = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    props.filterByUserName(userName);
  }, [userName]);

  return (
    <div className={classes.UsersFilters}>
      <div className={classes.Search}>
        <label htmlFor="SearchInput">
          <SearchOutlinedIcon className={classes.SearchIcon} />
        </label>
        <input
          type="search"
          id="SearchInput"
          className={[classes.FilterInput, classes.SearchFilterInput].join(" ")}
          size="20"
          placeholder="Search..."
        />
      </div>

      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={userNameChangedHandler}
        className={[
          classes.FilterInput,
          classes.UserFilter,
          classes.UserNameFilter,
        ].join(" ")}
      />

      <div className={[classes.UserFilter, classes.FilterButton].join(" ")}>
        <span>user status</span>
        <Button filterButton>
          any <KeyboardArrowDownIcon />
        </Button>
      </div>
      <div className={[classes.UserFilter, classes.FilterButton].join(" ")}>
        <span>creation date</span>
        <Button filterButton>
          all time <CalendarTodayIcon className={classes.CalenderIcon} />
        </Button>
      </div>

      <Button allFilters>all filters</Button>
    </div>
  );
};

export default UsersFilters;
