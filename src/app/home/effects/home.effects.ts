import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../app.state';
import { WebService } from '../../core/services/web.service';
import * as HomeActions from '../actions/home.actions';

@Injectable()
export class HomeEffects {

  @Effect() getTitleAndDescription$: Observable<HomeActions.All> = this.actions
    .ofType(HomeActions.GET_TITLE_AND_DESCRIPTION)
    .switchMap((action: HomeActions.All) => this.webService.getTitleAndDescription())
    .map((data: any) => (new HomeActions.GetTitleAndDescriptionSuccess(data)));

  constructor(
    private store: Store<AppState>,
    private webService: WebService,
    private actions: Actions
  ) {}
}
