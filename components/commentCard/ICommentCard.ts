/**
 * Comment card interface.
 */
export interface ICommentCard {
  /**
   * Comment id.
   */
  id: number;
  /**
   * Username of the person who commented.
   */
  username: string;
  /**
   * Date when comment was added.
   */
  date: string;
  /**
   * Comment description.
   */
  content: string;
  /**
   * Number of likes the comment has.
   */
  likes: number;
  /**
   * Replies to a comment.
   */
  replies?: ICommentCard[];
}
