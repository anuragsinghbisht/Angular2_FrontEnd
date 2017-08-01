import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as ProductActions from '../../actions/product.actions';
import { AppState } from '../../../app.state';
import { Product } from '../../../core/models/product.model';
import { selectProduct } from '../../state/selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  loading: boolean;
  error: string;
  routeSubscription;
  stateSubscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const category = params.category;
      const productId = params.id;
      this.store.dispatch(new ProductActions.GetProduct({ category, productId}));
      this.stateSubscription = this.store.select(selectProduct).subscribe(state => {
        this.product = state.product[0];
        this.loading = state.loading;
        this.error = state.error;
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.stateSubscription.unsubscribe();
  }

}
