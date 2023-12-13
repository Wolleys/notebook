import { ReactNode, FormEvent } from "react";

export interface AuthContainerProps {
  props: {
    title: string;
    desc: string;
    fields: ReactNode[];
    nameFields?: ReactNode[];
    bottomText: string;
    bottomLink: { href: string; text: string };
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  };
}
