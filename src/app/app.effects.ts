import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from './home/actions/home.action';
import { AppState } from './app.state';
import { WebService } from './core/services/web.service';

@Injectable()
export class AppEffects {

  @Effect() getData$: Observable<Action> = this.actions
  .ofType(HomeActions.GET_DATA)
  .switchMap((action: Action) => this.webService.getData())
  .map((data: any) => (new HomeActions.GetDataSuccess(data)))

  constructor(
    private actions: Actions,
    private webService: WebService,
    private store: Store<AppState>
  ) {}

}
