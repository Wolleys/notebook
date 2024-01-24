/**
 * Most popular interface.
 */
export interface IMostPopular {
  /**
   * ID of the post.
   */
  id: number;
  /**
   * Slug of the post.
   */
  slug: string;
  /**
   * Title of the post.
   */
  title: string;
  /**
   * Author of the post.
   */
  author: string;
  /**
   * Total number of views the post has.
   */
  views: number;
  /**
   * Username of the author of the post.
   */
  username: string;
}
