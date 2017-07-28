import { Action } from '@ngrx/store';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILED = 'GET_CATEGORY_FAILED';

export class GetCategory implements Action {
  readonly type = GET_CATEGORY;
}

export class GetCategorySuccess implements Action {
  readonly type = GET_CATEGORY_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCategoryFailed implements Action {
  readonly type = GET_CATEGORY_FAILED;
  constructor(public payload: any) {}
}

export type All = GetCategory | GetCategoryFailed | GetCategorySuccess;
