/**
 * Featured post interface.
 */
export interface IFeatured {
  /**
   * Featured post id.
   */
  id: number;
  /**
   * Featured post slug.
   */
  slug: string;
  /**
   * Featured post title.
   */
  title: string;
  /**
   * Featured post description.
   */
  desc: string;
  /**
   * Featured postbauthoer.
   */
  author: string;
  /**
   * Featured post updated date.
   */
  updatedDate: string;
  /**
   * Featured post username.
   */
  username: string;
  /**
   * Featured post image url.
   */
  imageUrl: string;
}
