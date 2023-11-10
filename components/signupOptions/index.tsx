import { FC } from "react";
import styles from "./signupoptions.module.css";
import Button from "@/components/button";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";
import { googleIcon, facebookIcon, xIcon, appleIcon } from "@/icons";

const SignUpOptions: FC = () => {
  return (
    <div className={styles.socialContainer}>
      <Button variant="social">
        <FontAwesomeIcon icon={googleIcon} /> Google
      </Button>
      <Button variant="social">
        <FontAwesomeIcon icon={facebookIcon} /> Facebook
      </Button>
      <Button variant="social">
        <FontAwesomeIcon icon={xIcon} /> Twitter
      </Button>
      <Button variant="social">
        <FontAwesomeIcon icon={appleIcon} /> Apple
      </Button>
    </div>
  );
};

export default SignUpOptions;
