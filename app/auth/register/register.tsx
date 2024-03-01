"use client";

import { FC, FormEvent } from "react";
import Input from "@/components/input";
import { email } from "@/inputs/email";
import Button from "@/components/button";
import { lastName } from "@/inputs/lastName";
import { firstName } from "@/inputs/firstName";
import useInputChange from "@/hooks/useInputChange";
import AuthContainer from "@/containers/authContainer";

/**
 * Component which shows the register page.
 * @returns The auth container that renders the register page component.
 */
const Register: FC = () => {
  const initialFormState = { email: "", firstName: "", lastName: "" };
  const { values, handleInputChange } = useInputChange({
    initialValues: initialFormState,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register form values:", values);
  };

  const nameFields = [
    <Input key="firstName" input={firstName} onChange={handleInputChange} />,
    <Input key="lastName" input={lastName} onChange={handleInputChange} />,
  ];

  const fields = [
    <Input key="email" input={email} onChange={handleInputChange} />,
    <Button key="button" variant="auth">
      Sign Up with Email
    </Button>,
  ];

  const registerProps = {
    title: "Sign Up to Notebook",
    desc: "Enter your email below to sign up",
    nameFields,
    fields,
    bottomText: "Already been here before? Just",
    bottomLink: {
      href: "/auth/login",
      text: "Sign In",
    },
    onSubmit: handleSubmit,
  };

  return <AuthContainer props={registerProps} />;
};

export default Register;
