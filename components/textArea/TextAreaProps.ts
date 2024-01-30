/**
 * Textarea props.
 */
export interface TextAreaProps {
  /**
   * Checks if we are replying.
   */
  isReply: boolean;
  /**
   * Name of user we are replying to.
   */
  replyingToUser?: string;
  /**
   * Fuction that sends the post.
   */
  onPost: (text: string) => void;
}
