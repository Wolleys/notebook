import { ReactNode, ButtonHTMLAttributes, MouseEvent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "auth" | "social";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
