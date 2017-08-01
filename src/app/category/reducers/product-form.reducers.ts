import * as ProductFormActions from '../actions/product-form.actions';
import { ProductFormState } from '../state/product-form.state';

const initialState: ProductFormState = {
  loading: false,
  error: null
};

export type Action = ProductFormActions.All;

export function productFormReducers (state: ProductFormState = initialState, action: Action) {
  switch (action.type) {
    case ProductFormActions.SUBMIT_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductFormActions.SUBMIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case ProductFormActions.SUBMIT_PRODUCT_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
