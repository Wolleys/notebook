interface MostPopular {
  id: number;
  slug: string;
  title: string;
  author: string;
  views: number;
  username: string;
}

export default MostPopular;

export interface MostPopularProps {
  mostPopular: MostPopular[];
}
