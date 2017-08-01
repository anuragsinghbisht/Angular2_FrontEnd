import { createFeatureSelector } from '@ngrx/store';
import { CategoryState } from './category.state';
import { ProductState } from './product.state';
import { ProductListState } from './product-list.state';
import { ProductFormState } from './product-form.state';

export const selectCategories = createFeatureSelector<CategoryState>('categories');
export const selectProducts = createFeatureSelector<ProductListState>('products');
export const selectProduct = createFeatureSelector<ProductState>('product');
export const selectProductForm = createFeatureSelector<ProductFormState>('form');
