interface Post {
  id: number;
  slug: string;
  author: string;
  updatedDate: string;
  title: string;
  desc: string;
  categories: string | string[];
  imageUrl: string;
  username: string;
}

export default Post;

export interface PostProps {
  posts: Post[];
}
