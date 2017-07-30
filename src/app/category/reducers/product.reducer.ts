import * as ProductActions from '../actions/product.action';
import { ProductState } from '../store/product.state';

const initialState: ProductState = {
  product: [],
  loading: true,
  error: null
};

export type Action = ProductActions.All;

export function productReducer(
  state: ProductState = initialState,
  action: Action
) {
  switch (action.type) {
    case ProductActions.GET_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductActions.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    }
    case ProductActions.GET_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }
}
