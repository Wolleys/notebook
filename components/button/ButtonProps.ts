import { ReactNode, ButtonHTMLAttributes, MouseEvent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "auth" | "social" | "publish";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
