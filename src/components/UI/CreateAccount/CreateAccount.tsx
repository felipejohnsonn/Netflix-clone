import { BaseSyntheticEvent } from "react";
import EmailInput from "../EmailInput/EmailInput";
import GetStarted from "../GetStarted/GetStarted";

import classes from "./CreateAccount.module.css";

const CreateAccount: React.FC<{
  className: String;
  labelId: string;
  id: string;
}> = (props: any) => {
  return (
    <div className={`${classes.createAccountContainer} ${props.className}`}>
      <p>
        Pronto para assistir? Digite seu e-mail para criar ou reiniciar sua associação.
      </p>
      <div className={`${classes.createAccount} ${props.className}`}>
        <EmailInput id={props.id} labelId={props.labelId} />
        <GetStarted />
      </div>
    </div>
  );
};

export default CreateAccount;
