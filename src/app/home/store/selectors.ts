import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HomeState } from './home.state';
import { AppState } from '../../app.state';

export const selectFeature = createFeatureSelector<HomeState>('home');
export const selectCategoryList = createSelector(selectFeature, (state: HomeState) => state.categoryList);
export const selectLoading  = createSelector(selectFeature, (state: HomeState) => state.loading);
export const selectError  = createSelector(selectFeature, (state: HomeState) => state.error);
