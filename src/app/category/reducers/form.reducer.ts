import * as FormAction from '../actions/form.action';
import { FormState } from '../store/form.state';

const initialState: FormState = {
  loading: false,
  error: null,
  isSuccessfull: false
};

export type Action = FormAction.All;

export function formReducer(state: FormState = initialState, action: Action) {
  switch (action.type) {
    case FormAction.SUBMIT_PRODUCT: {
      return {
        ...state,
        loading: true
      };
    }
    case FormAction.SUBMIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSuccessfull: true
      };
    }
    case FormAction.SUBMIT_PRODUCT_FAILED: {
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
