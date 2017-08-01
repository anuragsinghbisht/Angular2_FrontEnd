import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as CategoryActions from '../actions/category.actions';
import * as ProductListActions from '../actions/product-list.actions';
import * as ProductActions from '../actions/product.actions';
import * as ProductFormActions from '../actions/product-form.actions';

import { WebService } from '../../core/services/web.service';
import { AppState } from '../../app.state';

@Injectable()
export class CategoryEffects {

  @Effect() getCategories$: Observable<Action> = this.actions$
    .ofType(CategoryActions.GET_ALL_CATEGORIES)
    .switchMap((action: CategoryActions.All) => this.webService.getCategories())
    .map((data: any) => (new CategoryActions.GetAllCategoriesSuccess(data)));

  @Effect() getProducts$: Observable<Action> = this.actions$
    .ofType(ProductListActions.GET_ALL_PRODUCTS)
    .switchMap((action: ProductListActions.All) => this.webService.getProducts(action.payload))
    .map((data: any) => (new ProductListActions.GetAllProductsSuccess(data)));

  @Effect() getProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT)
    .switchMap((action: ProductActions.All) => this.webService.getProduct(action.payload))
    .map((data: any) => (new ProductActions.GetProductSuccess(data)));

  @Effect({ dispatch: false }) submitProduct$: Observable<Action> = this.actions$
    .ofType(ProductFormActions.SUBMIT_PRODUCT)
    .switchMap((action: ProductFormActions.All) => this.webService.submitProduct(action.payload))
    .do(() => this.router.navigate(['category', 'list']));


  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private webService: WebService,
    private router: Router
  ) {}
}
