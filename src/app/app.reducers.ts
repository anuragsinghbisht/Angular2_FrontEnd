import { combineReducers, compose } from '@ngrx/store';
import { AppState } from './app.state';
import { storeFreeze } from 'ngrx-store-freeze';

// Include reducers from modules
import { homeReducer } from './home/reducers/home.reducers';
import { categoryReducer } from './category/reducers/category.reducer';
import { productListReducer } from './category/reducers/product-list.reducer';
import { productReducer } from './category/reducers/product.reducer';
import { formReducer } from './category/reducers/form.reducer';
// Define reducers
export const reducers = {
  home: homeReducer,
  category: categoryReducer,
  productList: productListReducer,
  product: productReducer,
  form: formReducer
};

export const metaReducers = [ storeFreeze ];
