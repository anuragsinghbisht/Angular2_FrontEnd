import { Action } from '@ngrx/store';

export const  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const  GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const  GET_ALL_PRODUCTS_FAILED = 'GET_ALL_PRODUCTS_FAILED';

export class GetAllProducts implements Action {
  readonly type = GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetAllProductsSuccess implements Action {
  readonly type = GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetAllProductsFailed implements Action {
  readonly type = GET_ALL_PRODUCTS_FAILED;
  constructor(public payload: any) {}
}

export type All = GetAllProducts | GetAllProductsSuccess | GetAllProductsFailed;
