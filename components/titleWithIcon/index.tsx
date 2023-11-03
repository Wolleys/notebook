import { FC } from "react";
import { IconProps } from "@/interfaces";
import styles from "./titlewithicon.module.css";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

interface TWIconProps {
  icon: IconProps;
  title: string;
  iconClassName?: string; // Allow custom class name for the icon
}

const TitleWithIcon: FC<TWIconProps> = ({ icon, title, iconClassName }) => {
  return (
    <h2 className={styles.title}>
      <FontAwesomeIcon icon={icon} customClass={iconClassName} />
      {title}
    </h2>
  );
};

export default TitleWithIcon;
