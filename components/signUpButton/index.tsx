import { FC } from "react";
import Button from "@/components/button";
import { SignUpBtnProps } from "./SignUpBtnProps";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const SignUpButton: FC<SignUpBtnProps> = ({ icon, children, onClick }) => {
  return (
    <Button variant="social" onClick={onClick}>
      <FontAwesomeIcon icon={icon} /> {children}
    </Button>
  );
};

export default SignUpButton;
