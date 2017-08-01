import * as CategoryActions from '../actions/category.actions';
import { Category } from '../../core/models/category.model';
import { CategoryState } from '../state/category.state';

const initialState: CategoryState = {
  categories: [] as Category[],
  loading: false,
  error: null
};

export type Action = CategoryActions.All;

export function categoryReducers (state: CategoryState = initialState, action: Action) {
  switch (action.type) {
    case CategoryActions.GET_ALL_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }
    case CategoryActions.GET_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        categories: action.payload
      };
    }
    case CategoryActions.GET_ALL_CATEGORIES_FAILED: {
      return {
        ...state,
        loading: false,
        categories: [] as Category[],
        error: action.payload
      };
    }
    default:
      return state;
  }
}
