import { FC } from "react";
import styles from "./titlewithicon.module.css";
import { TitleWithIconProps } from "./TitleWithIconProps";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const TitleWithIcon: FC<TitleWithIconProps> = ({
  icon,
  title,
  iconClassName,
}) => {
  return (
    <h2 className={styles.title}>
      <FontAwesomeIcon icon={icon} customClass={iconClassName} />
      {title}
    </h2>
  );
};

export default TitleWithIcon;
