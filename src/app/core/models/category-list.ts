import { Category } from './category';
import { Product } from './product';

export interface CategoryList {
  _id: string;
  title: string;
  description: string;
  categories: Category[];
  rows: Product[];
}
