import { Action } from '@ngrx/store';

export const SUBMIT_PRODUCT = 'SUBMIT_PRODUCT';
export const SUBMIT_PRODUCT_SUCCESS = 'SUBMIT_PRODUCT_SUCCESS';
export const SUBMIT_PRODUCT_FAILED = 'SUBMIT_PRODUCT_FAILED';

export class SubmitProduct implements Action {
  readonly type = SUBMIT_PRODUCT;
  constructor(public payload: any) {}
}

export class SubmitProductSuccess implements Action {
  readonly type = SUBMIT_PRODUCT;
  constructor(public payload: any) {}
}

export class SubmitProductFailed implements Action {
  readonly type = SUBMIT_PRODUCT;
  constructor(public payload: any) {}
}

export type All = SubmitProduct | SubmitProductFailed | SubmitProductSuccess;
