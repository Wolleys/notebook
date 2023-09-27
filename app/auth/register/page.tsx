import { FC } from "react";
import Register from "./register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register – Notebook",
  description: "This is the notebook app Register page",
};

const RegisterPage: FC = () => {
  return <Register />;
};

export default RegisterPage;
