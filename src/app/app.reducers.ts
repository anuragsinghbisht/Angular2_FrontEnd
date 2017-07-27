import { combineReducers, compose } from '@ngrx/store';
import { AppState } from './app.state';
import { storeFreeze } from 'ngrx-store-freeze';

// Include reducers from modules
import { homeReducer } from './home/reducers/home.reducers';


// Define reducers
export const reducers = {
  home: homeReducer
};

export const metaReducers = [ storeFreeze ];
