import { FC } from "react";
import { IconProps } from "@/interfaces";
import SignUpButton from "../signUpButton";
import styles from "./signupoptions.module.css";
import { googleIcon, facebookIcon, xIcon, appleIcon } from "@/icons";

interface SocialButton {
  icon: IconProps;
  label: string;
}

const socialButtons: SocialButton[] = [
  { icon: googleIcon, label: "Google" },
  { icon: facebookIcon, label: "Facebook" },
  { icon: xIcon, label: "Twitter" },
  { icon: appleIcon, label: "Apple" },
];

const SignUpOptions: FC = () => {
  return (
    <div className={styles.socialContainer}>
      {socialButtons.map((button, index) => (
        <SignUpButton key={index} icon={button.icon}>
          {button.label}
        </SignUpButton>
      ))}
    </div>
  );
};

export default SignUpOptions;
