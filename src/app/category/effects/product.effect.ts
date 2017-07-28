import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as ProductListActions from '../actions/product-list.action';
import * as ProductActions from '../actions/product.action';
import * as FormActions from '../actions/form.action';

import { AppState } from '../../app.state';
import { WebService } from '../../core/services/web.service';

@Injectable()
export class ProductEffects {
  @Effect() getProducts$: Observable<Action> = this.actions
  .ofType(ProductListActions.GET_PRODUCTS)
  .switchMap((action: ProductListActions.All) => {
    return this.webService.getProducts(action.payload);
  })
  .map((data: any) => (new ProductListActions.GetProductsSuccess(data)))

  @Effect() getProduct$: Observable<Action> = this.actions
  .ofType(ProductActions.GET_PRODUCT)
  .switchMap((action: ProductActions.All) => {
    return this.webService.getProduct(action.payload);
  })
  .map((data: any) => (new ProductActions.GetProductSuccess(data)))

  @Effect() submitProduct$: Observable<Action> = this.actions
  .ofType(FormActions.SUBMIT_PRODUCT)
  .switchMap((action: FormActions.All) => {
    return this.webService.submitProduct(action.payload);
  })
  .map((data: any) => (new FormActions.SubmitProductSuccess(data)))

  @Effect({ dispatch: false }) submitProductSuccess$ = this.actions
  .ofType(FormActions.SUBMIT_PRODUCT_SUCCESS)
  .do(() => {
    return this.router.navigate(['category', 'list']);
  })


  constructor(
    private actions: Actions,
    private webService: WebService,
    private store: Store<AppState>,
    private router: Router
  ) {}
}
