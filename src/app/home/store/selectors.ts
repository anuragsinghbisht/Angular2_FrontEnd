import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HomeState } from './home.state';
import { AppState } from '../../app.state';

export const selectFeature = createFeatureSelector<HomeState>('home');
export const selectInformation = createSelector(selectFeature, (state: HomeState) => state.info);
export const selectLoading  = createSelector(selectFeature, (state: HomeState) => state.loading);
export const selectError  = createSelector(selectFeature, (state: HomeState) => state.error);
