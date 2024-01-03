/**
 * Input interface.
 */
export interface IInput {
  /**
   * Input type.
   */
  type: string;
  /**
   * Input name.
   */
  name?: string;
  /**
   * Input placehiolder.
   */
  placeholder?: string;
  /**
   * Input value.
   */
  value?: string;
  /**
   * Input id.
   */
  id?: string;
  /**
   * Input accepted file types.
   */
  accept?: string;
}
