import { Action } from '@ngrx/store';

export const GET_TITLE_AND_DESCRIPTION = 'GET_TITLE_AND_DESCRIPTION';
export const GET_TITLE_AND_DESCRIPTION_SUCCESS = 'GET_TITLE_AND_DESCRIPTION_SUCCESS';
export const GET_TITLE_AND_DESCRIPTION_FAILED = 'GET_TITLE_AND_DESCRIPTION_FAILED';

export class GetTitleAndDescription implements Action {
  readonly type = GET_TITLE_AND_DESCRIPTION;
}

export class GetTitleAndDescriptionSuccess implements Action {
  readonly type = GET_TITLE_AND_DESCRIPTION_SUCCESS;
  constructor(public payload: any) {}
}

export class GetTitleAndDescriptionFailed implements Action {
  readonly type = GET_TITLE_AND_DESCRIPTION_FAILED;
  constructor(public payload: any) {}
}

export type All = GetTitleAndDescription | GetTitleAndDescriptionSuccess | GetTitleAndDescriptionFailed;
