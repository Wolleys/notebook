import { InputHTMLAttributes, ChangeEvent } from "react";
import { IInput } from "./IInput";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  input: IInput;
  customClass?: string; // Allow custom class name from styles
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
