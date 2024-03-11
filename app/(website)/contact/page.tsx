import { FC } from "react";
import Contact from "./contact";
import type { Metadata } from "next";

/**
 * The metadata for the contact page.
 */
export const metadata: Metadata = {
  title: "Contact – Notebook",
  description: "This is the notebook app contact us page",
};

/**
 * Component which shows the contact page.
 * @returns The contact page component.
 */
const ContactPage: FC = () => {
  return <Contact />;
};

export default ContactPage;
