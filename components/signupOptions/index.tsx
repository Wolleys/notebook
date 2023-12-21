import { FC, MouseEvent } from "react";
import { xIcon } from "@/icons/xIcon";
import { IconProps } from "@/interfaces";
import SignUpButton from "../signUpButton";
import { appleIcon } from "@/icons/appleIcon";
import styles from "./signupoptions.module.css";
import { googleIcon } from "@/icons/googleIcon";
import { facebookIcon } from "@/icons/facebookIcon";

interface SocialButton {
  icon: IconProps;
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const handleGoogle = () => {
  console.log("Google button clicked");
};

const handleFacebook = () => {
  console.log("Facebook button clicked");
};

const handleTwitter = () => {
  console.log("Twitter button clicked");
};

const handleApple = () => {
  console.log("Apple button clicked");
};

const socialButtons: SocialButton[] = [
  { icon: googleIcon, label: "Google", onClick: handleGoogle },
  { icon: facebookIcon, label: "Facebook", onClick: handleFacebook },
  { icon: xIcon, label: "Twitter", onClick: handleTwitter },
  { icon: appleIcon, label: "Apple", onClick: handleApple },
];

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
