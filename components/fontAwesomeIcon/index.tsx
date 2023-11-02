import { FC } from "react";
import styles from "./incons.module.css";
import { IconProps } from "@/interfaces";

interface FontAwesomeIconProps {
  iconProps: IconProps;
}

const FontAwesomeIcon: FC<FontAwesomeIconProps> = ({ iconProps }) => {
  const { className, iconName, iconType } = iconProps;
  return (
    <i
      className={`${iconType} fa-${iconName} fa-fw ${styles["icons"]} ${className}`}
    />
  );
};

export default FontAwesomeIcon;
