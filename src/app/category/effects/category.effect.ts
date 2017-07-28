import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as CategoryActions from '../actions/category.action';
import { AppState } from '../../app.state';
import { WebService } from '../../core/services/web.service';

@Injectable()
export class CategoryEffects {
  @Effect() getCategories$: Observable<Action> = this.actions
  .ofType(CategoryActions.GET_CATEGORY)
  .switchMap((action: CategoryActions.All) => this.webService.getCategories())
  .map((data: any) => (new CategoryActions.GetCategorySuccess(data)))

  constructor(
    private actions: Actions,
    private webService: WebService,
    private store: Store<AppState>
  ) {}
}
