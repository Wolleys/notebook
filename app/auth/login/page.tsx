import { FC } from "react";
import Login from "./login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login – Notebook",
  description: "This is the notebook app Login page",
};

const LoginPage: FC = () => {
  return <Login />;
};

export default LoginPage;
