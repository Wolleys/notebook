"use client";

import { FC, FormEvent } from "react";
import { email } from "@/inputs/email";
import Input from "@/components/input";
import Button from "@/components/button";
import useInputChange from "@/hooks/useInputChange";
import AuthContainer from "@/containers/authContainer";

/**
 * Component which shows the login page.
 * @returns The auth container that renders the login page component.
 */
const Login: FC = () => {
  const initialFormState = { email: "" };
  const { values, handleInputChange } = useInputChange({
    initialValues: initialFormState,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form values:", values);
  };

  const fields = [
    <Input key="email" input={email} onChange={handleInputChange} />,
    <Button key="button" variant="auth">
      Sign In with Email
    </Button>,
  ];

  const loginProps = {
    title: "Sign In to Notebook",
    desc: "Enter your email below to sign in",
    fields,
    bottomText: "Not been here before? Just",
    bottomLink: {
      href: "/auth/register",
      text: "Sign Up",
    },
    onSubmit: handleSubmit,
  };

  return <AuthContainer props={loginProps} />;
};

export default Login;
