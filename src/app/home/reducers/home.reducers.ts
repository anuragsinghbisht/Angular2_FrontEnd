import * as HomeActions from '../actions/home.action';
import { CategoryList } from '../../core/models/category-list';
import { HomeState } from '../store/home.state';

export type Action = HomeActions.All;

const initialState: HomeState = {
  info: {
    id: '',
    title: '',
    description: ''
  },
  loading: true,
  error: null
};

export function homeReducer(state: HomeState = initialState, action: Action) {
  switch (action.type) {
    case HomeActions.GET_TITLE_AND_DESCRIPTION: {
      const newState = {
        ...state,
        loading: true
      };
      return newState;
    }
    case HomeActions.GET_TITLE_AND_DESCRIPTION_SUCCESS: {
      const newState = {
        ...state,
        info: action.payload,
        loading: false
      };
      return newState;
    }
    case HomeActions.GET_TITLE_AND_DESCRIPTION_FAILED: {
      const newState = {
        ...state,
        loading: false,
        error: action.payload
      };
      return newState;
    }
    default:
      return state;
  }
}
