import { Action } from '@ngrx/store';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export class GetData implements Action {
  readonly type = GET_DATA;
}

export class GetDataSuccess implements Action {
  readonly type = GET_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class GetDataFailed implements Action {
  readonly type = GET_DATA_FAILED;
  constructor(public payload: any) {}
}

export type All = GetData | GetDataSuccess | GetDataFailed;
