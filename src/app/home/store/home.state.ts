import { CategoryList } from '../../core/models/category-list';

export interface HomeState {
  categoryList: CategoryList;
  loading: boolean;
  error: string;
}
