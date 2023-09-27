import { FC } from "react";
import Contact from "./contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Notebook",
  description: "This is the notebook app contact us page",
};

const ContactPage: FC = () => {
  return <Contact />;
};

export default ContactPage;
