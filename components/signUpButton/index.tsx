import { FC, ReactNode } from "react";
import Button from "@/components/button";
import { IconProps } from "@/interfaces";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

interface SignUpBtnProps {
  icon: IconProps;
  children: ReactNode;
}

const SignUpButton: FC<SignUpBtnProps> = ({ icon, children }) => {
  return (
    <Button variant="social">
      <FontAwesomeIcon icon={icon} /> {children}
    </Button>
  );
};

export default SignUpButton;
