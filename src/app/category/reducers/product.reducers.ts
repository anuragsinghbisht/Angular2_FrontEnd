import * as ProductActions from '../actions/product.actions';
import { Product } from '../../core/models/product.model';
import { ProductState } from '../state/product.state';

const initialState: ProductState = {
  product: [] as Product[],
  loading: false,
  error: null
};

export type Action = ProductActions.All;

export function productReducers (state: ProductState = initialState, action: Action) {
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
        product: [] as Product[],
        error: action.payload
      };
    }
    default:
      return state;
  }
}
