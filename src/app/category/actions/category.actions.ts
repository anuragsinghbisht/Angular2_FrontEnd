import { Action } from '@ngrx/store';

export const  GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const  GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const  GET_ALL_CATEGORIES_FAILED = 'GET_ALL_CATEGORIES_FAILED';

export class GetAllCategories implements Action {
  readonly type = GET_ALL_CATEGORIES;
}

export class GetAllCategoriesSuccess implements Action {
  readonly type = GET_ALL_CATEGORIES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetAllCategoriesFailed implements Action {
  readonly type = GET_ALL_CATEGORIES_FAILED;
  constructor(public payload: any) {}
}

export type All = GetAllCategories | GetAllCategoriesSuccess | GetAllCategoriesFailed;
