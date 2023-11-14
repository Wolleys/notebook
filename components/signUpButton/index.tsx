import { FC, ReactNode, MouseEvent } from "react";
import Button from "@/components/button";
import { IconProps } from "@/interfaces";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

interface SignUpBtnProps {
  icon: IconProps;
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SignUpButton: FC<SignUpBtnProps> = ({ icon, children, onClick }) => {
  return (
    <Button variant="social" onClick={onClick}>
      <FontAwesomeIcon icon={icon} /> {children}
    </Button>
  );
};

export default SignUpButton;
