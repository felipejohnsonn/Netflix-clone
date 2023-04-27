import ButtonCard from "../ButtonCard/ButtonCard";
import classes from "./SignIn.module.css";

const SignInBtn = (props: any) => {
  return (
    <ButtonCard className={classes.btnSignIn} type={props.type}>
      <a href="#"> Entrar</a>
    </ButtonCard>
  );
};

export default SignInBtn;
