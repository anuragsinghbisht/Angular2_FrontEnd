import * as FormAction from '../actions/form.action';

const initialState = {};

export type Action = FormAction.All;

export function reducer (state, action) {
  switch (action.type) {
    case FormAction.SUBMIT_PRODUCT: {
      return state;
    }
    case FormAction.SUBMIT_PRODUCT_SUCCESS: {
      return state;
    }
    case FormAction.SUBMIT_PRODUCT_FAILED: {
      return state;
    }
    default:
      return state;
  }
}
