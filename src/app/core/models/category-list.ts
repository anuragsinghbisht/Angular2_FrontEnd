import { Category } from './category';
import { Product } from './product';

export interface CategoryList {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  rows: Product[];
}
