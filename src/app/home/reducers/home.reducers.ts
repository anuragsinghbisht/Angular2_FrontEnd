import * as HomeActions from '../actions/home.actions';
import { HomeState } from '../state/home.state';
import { Exercise } from '../../core/models/exercise.model';

export type Action = HomeActions.All;

const initialState: HomeState = {
  exercise: {} as Exercise,
  loading: false,
  error: null
};

export function homeReducer(state: HomeState = initialState, action: Action) {
  switch (action.type) {
    case HomeActions.GET_TITLE_AND_DESCRIPTION: {
      return {
        ...state,
        loading: true
      };
    }
    case HomeActions.GET_TITLE_AND_DESCRIPTION_SUCCESS: {
      return {
        ...state,
        loading: false,
        exercise: action.payload
      };
    }
    case HomeActions.GET_TITLE_AND_DESCRIPTION_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        exercise: {} as Exercise
      };
    }
    default: {
      return state;
    }
  }
}
