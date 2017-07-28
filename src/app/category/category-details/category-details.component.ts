import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as ProductActions from '../actions/product.action';
import { AppState } from '../../app.state';
import { selectProductFeature } from '../store/selectors';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  routeParamSubscribe;
  product: Product;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.routeParamSubscribe = this.route.params.subscribe(params => {
      this.store.dispatch(new ProductActions.GetProduct({
        category: params.category,
        productId: params.id
      }));
      this.store.select(selectProductFeature).subscribe(data => {
        if (data && data.product.length) {
          this.product = data.product[0];
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamSubscribe.unsubscribe();
  }
}
