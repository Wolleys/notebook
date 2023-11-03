interface FeaturedWriter {
  id: number;
  name: string;
  church: string;
  username: string;
}

export default FeaturedWriter;

export interface FeaturedWritersProps {
  featuredWriters: FeaturedWriter[];
}
