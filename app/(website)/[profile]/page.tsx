import { FC } from "react";
import Profile from "./profile";
import type { Metadata } from "next";

/**
 * The metadata for the profile page.
 */
export const metadata: Metadata = {
  title: "Username - Notebook",
  description: "This is the notebook app single post page",
};

/**
 * Component which shows the profile page.
 * @returns The profile page component.
 */
const ProfilePage: FC = () => {
  return <Profile />;
};

export default ProfilePage;
