import * as CategoryActions from '../actions/category.action';
import { CategoryState } from '../store/category.state';

const initialState: CategoryState = {
  categoryList: [],
  loading: true,
  error: null
};

export type Action = CategoryActions.All;

export const categoryReducer = (state: CategoryState = initialState, action: Action) => {
  switch (action.type) {
    case CategoryActions.GET_CATEGORY: {
      return {
        ...state,
        loading: true
      }
    }
    case CategoryActions.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        categoryList: action.payload
      }
    }
    case CategoryActions.GET_CATEGORY_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
