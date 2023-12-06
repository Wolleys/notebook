interface FeaturedWriter {
  id: number;
  name: string;
  church: string;
  username: string;
}

export interface FeaturedWritersProps {
  featuredWriters: FeaturedWriter[];
}
