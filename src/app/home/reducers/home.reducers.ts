import * as HomeActions from '../actions/home.action';
import { CategoryList } from '../../core/models/category-list';
import { HomeState } from '../store/home.state';

export type Action = HomeActions.All;

const initialState: HomeState = {
  categoryList: {
    _id: '',
    title: '',
    description: '',
    categories: [],
    rows: []
  },
  loading: true,
  error: null
};

export function homeReducer(state: HomeState = initialState, action: Action) {
  switch (action.type) {
    case HomeActions.GET_DATA: {
      const newState = {
        ...state,
        loading: true
      };
      return newState;
    }
    case HomeActions.GET_DATA_SUCCESS: {
      const categories = action.payload[0].rows.reduce((cat, row) => {
        if (!cat.some(e => e.categoryName === row.category)) {
          cat.push({categoryName: row.category});
        }
        return cat;
      }, []);
      const categoryList = { ...action.payload[0], categories };
      const newState = {
        ...state,
        categoryList,
        loading: false
      };
      return newState;
    }
    case HomeActions.GET_DATA_FAILED: {
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
