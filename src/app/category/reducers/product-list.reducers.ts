import * as ProductActions from '../actions/product-list.actions';
import { Product } from '../../core/models/product.model';
import { ProductListState } from '../state/product-list.state';

const initialState: ProductListState = {
  products: [] as Product[],
  loading: false,
  error: null
};

export type Action = ProductActions.All;

export function productListReducers (state: ProductListState = initialState, action: Action) {
  switch (action.type) {
    case ProductActions.GET_ALL_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductActions.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    }
    case ProductActions.GET_ALL_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
        products: [] as Product[],
        error: action.payload
      };
    }
    default:
      return state;
  }
}
