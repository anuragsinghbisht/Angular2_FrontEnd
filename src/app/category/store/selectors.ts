import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CategoryState } from './category.state';
import { ProductListState } from './product-list.state';
import { ProductState } from './product.state';
import { FormState } from './form.state';

export const selectCategoryFeature = createFeatureSelector<CategoryState>('category');
export const selectProductListFeature = createFeatureSelector<ProductListState>('productList');
export const selectProductFeature = createFeatureSelector<ProductState>('product');
export const selectFormFeature = createFeatureSelector<FormState>('form');
