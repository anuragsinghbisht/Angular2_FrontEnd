import { Category } from '../../core/models/category.model';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string;
}
