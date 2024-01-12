/**
 * Editor props.
 */
export interface EditorProps {
  /**
   * Value from the input.
   */
  value: string;
  /**
   * onChange event listener.
   */
  onChange: (value: string) => void;
}
