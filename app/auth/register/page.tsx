import { FC } from "react";
import Register from "./register";
import type { Metadata } from "next";

/**
 * The metadata for the register page.
 */
export const metadata: Metadata = {
  title: "Register – Notebook",
  description: "This is the notebook app Register page",
};

/**
 * Component which shows the register page.
 * @returns The register page component.
 */
const RegisterPage: FC = () => {
  return <Register />;
};

export default RegisterPage;
