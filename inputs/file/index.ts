import { IInput } from "@/components/input/IInput";

/**
 * File input.
 */
export const file: IInput = {
  /**
   * Input of type file.
   */
  type: "file",
  /**
   * Input id.
   */
  id: "imageLabel",
  /**
   * Type of file that the server accepts.
   */
  accept:"image/*"
};
