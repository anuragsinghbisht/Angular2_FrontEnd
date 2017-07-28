import { Category } from '../../core/models/category';

export interface CategoryState {
  categoryList: Category[],
  loading: boolean,
  error: string
}
