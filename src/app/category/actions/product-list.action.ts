import { Action } from '@ngrx/store';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';


export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetProductsFailed implements Action {
  readonly type = GET_PRODUCTS_FAILED;
  constructor(public payload: any) {}
}

export type All = GetProducts | GetProductsSuccess | GetProductsFailed;
