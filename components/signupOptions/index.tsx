import { FC } from "react";
import SignUpButton from "../signUpButton";
import styles from "./signupoptions.module.css";
import { socialButtons } from "./socialButtons";

const SignUpOptions: FC = () => {
  return (
    <div className={styles.socialContainer}>
      {socialButtons.map((button, index) => (
        <SignUpButton key={index} icon={button.icon} onClick={button.onClick}>
          {button.label}
        </SignUpButton>
      ))}
    </div>
  );
};

export default SignUpOptions;
