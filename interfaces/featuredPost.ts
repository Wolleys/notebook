interface FeaturedPost {
  id: number;
  slug: string;
  title: string;
  desc: string;
  author: string;
  updatedDate: string;
  username: string;
  imageUrl: string;
}

export default FeaturedPost;

export interface FeaturedProps {
  featuredPosts: FeaturedPost[];
}
