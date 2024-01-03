import { IconProps } from "@/interfaces";

/**
 * File Input Props.
 */
export interface FileInputProps {
  /**
   * Input label.
   */
  label?: string;
  /**
   * Icon interface.
   */
  icon: IconProps;
  /**
   * onChange event listener.
   */
  onChange: (file: File) => void;
}
