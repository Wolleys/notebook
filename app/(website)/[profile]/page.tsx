import { FC } from "react";
import Profile from "./profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Username - Notebook",
  description: "This is the notebook app single post page",
};

const ProfilePage: FC = () => {
  return <Profile />;
};

export default ProfilePage;
