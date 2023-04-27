import CreateAccount from "../UI/CreateAccount/CreateAccount";
import classes from "./Hero.module.css";

const Hero = (props: any) => {
  return (
    <div className={classes.hero}>
      <h1>Filmes, programas de TV e muito mais ilimitados.</h1>
      <p>Assista em qualquer lugar. Cancele a qualquer momento.</p>
      <CreateAccount
        labelId={"hero_label"}
        id={"hero_create_account"}
        className=""
      />
    </div>
  );
};

export default Hero;
