import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import classes from "./Hero.module.css";

const Hero = (props) => {
  const addNewUserHandler = () => {
    console.log("add new user !");
  };
  return (
    <section className={classes.Hero}>
      <h1 className={classes.MainHeading}>user management</h1>
      <Button primary clicked={addNewUserHandler}>
        <AddIcon className={classes.PlusIcon} /> add new
      </Button>
    </section>
  );
};

export default Hero;
