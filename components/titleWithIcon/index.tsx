import { FC } from "react";
import { TWIconProps } from "@/interfaces";
import styles from "./titlewithicon.module.css";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const TitleWithIcon: FC<TWIconProps> = ({ icon, title, iconClassName }) => {
  return (
    <h2 className={styles.title}>
      <FontAwesomeIcon icon={icon} customClass={iconClassName} />
      {title}
    </h2>
  );
};

export default TitleWithIcon;
