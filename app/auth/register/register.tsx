import { FC } from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import { email, firstName, lastName } from "@/inputs";
import AuthContainer from "@/containers/authContainer";

const nameFields = [
  <Input key="firstName" input={firstName} />,
  <Input key="lastName" input={lastName} />,
];

const fields = [
  <Input key="email" input={email} />,
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
};

const Register: FC = () => {
  return <AuthContainer props={registerProps} />;
};

export default Register;
