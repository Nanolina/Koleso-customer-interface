export interface ICategoryType {
  id: string;
  title: string;
  image: number; // Using only local images via require
  subcategories?: ICategoryType[];
}
