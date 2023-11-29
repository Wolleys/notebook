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
   * Input icon.
   */
  icon: IconProps;
  /**
   * Onchange.
   */
  onChange: (file: File) => void;
}
