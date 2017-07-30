import * as ProductListActions from '../actions/product-list.action';
import { ProductListState } from '../store/product-list.state';

const initialState: ProductListState = {
  products: [],
  loading: true,
  error: null
};

export type Action = ProductListActions.All;

export function productListReducer(
  state: ProductListState = initialState,
  action: Action
) {
  switch (action.type) {
    case ProductListActions.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductListActions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    }
    case ProductListActions.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
