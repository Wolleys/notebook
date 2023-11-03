interface TopCategory {
  id: number;
  name: string;
}

export default TopCategory;

export interface TopCategoriesProps {
  topCategories: TopCategory[];
}
