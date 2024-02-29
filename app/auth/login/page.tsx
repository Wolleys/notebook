import { FC } from "react";
import Login from "./login";
import type { Metadata } from "next";

/**
 * The metadata for the login page.
 */
export const metadata: Metadata = {
  title: "Login – Notebook",
  description: "This is the notebook app Login page",
};

/**
 * Component which shows the login page.
 * @returns The login page component.
 */
const LoginPage: FC = () => {
  return <Login />;
};

export default LoginPage;
