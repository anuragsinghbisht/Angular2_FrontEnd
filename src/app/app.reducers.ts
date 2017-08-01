import { combineReducers, compose } from '@ngrx/store';
import { AppState } from './app.state';
import { storeFreeze } from 'ngrx-store-freeze';

import { homeReducer } from './home/reducers/home.reducers';
import { categoryReducers } from './category/reducers/category.reducers';
import { productListReducers } from './category/reducers/product-list.reducers';
import { productReducers } from './category/reducers/product.reducers';
import { productFormReducers } from './category/reducers/product-form.reducers';

export const reducers = {
  home: homeReducer,
  categories: categoryReducers,
  products: productListReducers,
  product: productReducers,
  form: productFormReducers
};

export const metaReducers = [ storeFreeze ];
