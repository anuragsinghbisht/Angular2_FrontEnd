import { HomeState } from './home/store/home.state';
import { CategoryState } from './category/store/category.state';
import { ProductListState } from './category/store/product-list.state';
import { ProductState } from './category/store/product.state';
import { FormState } from './category/store/form.state';

export interface AppState {
  home: HomeState,
  category: CategoryState,
  productList: ProductListState,
  product: ProductState,
  form: FormState
}
