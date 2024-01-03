import { InputHTMLAttributes, ChangeEvent } from "react";
import { IInput } from "./IInput";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input interface.
   */
  input: IInput;
  /**
   * Allow custom class name from styles.
   */
  customClass?: string;
  /**
   * onChange event listener.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
