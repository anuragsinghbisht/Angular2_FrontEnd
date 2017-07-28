import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from '../actions/home.action';
import { AppState } from '../../app.state';
import { WebService } from '../../core/services/web.service';

@Injectable()
export class HomeEffects {

  @Effect() getTitleAndDescription$: Observable<Action> = this.actions
  .ofType(HomeActions.GET_TITLE_AND_DESCRIPTION)
  .switchMap((action: HomeActions.All) => this.webService.getTitleAndDescription())
  .map((data: any) => (new HomeActions.GetTitleAndDescriptionSuccess(data)))

  constructor(
    private actions: Actions,
    private webService: WebService,
    private store: Store<AppState>
  ) {}

}
