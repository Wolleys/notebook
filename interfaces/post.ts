export interface Post {
  posts: {
    id: number;
    slug: string;
    author: string;
    updatedDate: string;
    title: string;
    desc: string;
    categories: string | string[];
    imageUrl: string;
    username: string;
  }[];
}
