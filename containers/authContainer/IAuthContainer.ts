import { ReactNode, FormEvent } from "react";
/**
 * Auth container interface.
 */
export interface IAuthContainer {
  /**
   * Form title.
   */
  title: string;
  /**
   * Form description.
   */
  desc: string;
  /**
   * Form fields.
   */
  fields: ReactNode[];
  /**
   * Additional form fields.
   */
  nameFields?: ReactNode[];
  /**
   * More info.
   */
  bottomText: string;
  /**
   * Object with link and link text.
   */
  bottomLink: { href: string; text: string };
  /**
   * onSubmit event listener.
   */
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}
