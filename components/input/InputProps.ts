import { InputHTMLAttributes, ChangeEvent } from "react";

interface Input {
  type: string;
  name: string;
  placeholder?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  input: Input;
  customClass?: string; // Allow custom class name from styles
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
