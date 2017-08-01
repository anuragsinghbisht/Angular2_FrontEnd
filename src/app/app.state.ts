import { HomeState } from './home/state/home.state';
import { CategoryState } from './category/state/category.state';
import { ProductListState } from './category/state/product-list.state';
import { ProductState } from './category/state/product.state';
import { ProductFormState } from './category/state/product-form.state';

export interface AppState {
  home: HomeState;
  categories: CategoryState;
  products: ProductListState;
  product: ProductState;
  form: ProductFormState;
}
