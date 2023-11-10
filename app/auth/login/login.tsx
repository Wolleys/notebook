import { FC } from "react";
import { email } from "@/inputs";
import Input from "@/components/input";
import Button from "@/components/button";
import AuthContainer from "@/containers/authContainer";

const fields = [
  <Input key="email" input={email} />,
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
};

const Login: FC = () => {
  return <AuthContainer props={loginProps} />;
};

export default Login;
