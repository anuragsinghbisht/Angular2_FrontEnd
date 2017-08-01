import { Action } from '@ngrx/store';

export const  GET_PRODUCT = 'GET_PRODUCT';
export const  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const  GET_PRODUCT_FAILED = 'GET_PRODUCT_FAILED';

export class GetProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(public payload: any) {}
}

export class GetProductSuccess implements Action {
  readonly type = GET_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class GetProductFailed implements Action {
  readonly type = GET_PRODUCT_FAILED;
  constructor(public payload: any) {}
}

export type All = GetProduct | GetProductSuccess | GetProductFailed;
