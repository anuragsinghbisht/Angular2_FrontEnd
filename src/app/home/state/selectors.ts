import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HomeState } from './home.state';

export const selectHomeState = createFeatureSelector<HomeState>('home');
