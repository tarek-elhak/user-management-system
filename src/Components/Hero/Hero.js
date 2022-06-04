import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section
      className={[classes.Hero, !props.sideBarShown && classes.ExpandHero].join(
        " "
      )}
    >
      <h1 className={classes.MainHeading}>user management</h1>
      <Button primary clicked={props.showNewUserModal}>
        <AddIcon className={classes.PlusIcon} /> add new
      </Button>
    </section>
  );
};

export default Hero;
