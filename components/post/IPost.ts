/**
 * Post interface.
 */
export interface IPost {
  /**
   * ID of the post.
   */
  id: number;
  /**
   * Slug of the post.
   */
  slug: string;
  /**
   * Author of the post.
   */
  author: string;
  /**
   * Date the post was updated.
   */
  updatedDate: string;
  /**
   * Title of the post.
   */
  title: string;
  /**
   * Description of the post.
   */
  desc: string;
  /**
   * Categories of the post.
   */
  categories: string | string[];
  /**
   * Image of the post.
   */
  imageUrl: string;
  /**
   * Username of the author of the post.
   */
  username: string;
}
