import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.state';
import { Product } from '../../../core/models/product.model';
import * as ProductListActions from '../../actions/product-list.actions';
import { selectProducts } from '../../state/selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  loading: boolean;
  error: string;
  routeSubscription;
  storeSubscription;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const category = params.category;
      this.store.dispatch(new ProductListActions.GetAllProducts(category));
      this.storeSubscription = this.store.select(selectProducts).subscribe(state => {
        this.products = state.products;
        this.loading = state.loading;
        this.error = state.error;
      });
    });
  }

  ngOnDestroy () {
    this.routeSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }

}
