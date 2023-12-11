import { FC } from "react";
import styles from "./select.module.css";
import { SelectProps } from "./SelectProps";

const Select: FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <div className={styles.container}>
      <select {...rest}>
        <option>Select Category</option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
