import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as ProductListActions from '../actions/product-list.action';
import { AppState } from '../../app.state';
import { selectProductListFeature } from '../store/selectors';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  products: Product[];
  routeChangeSubscribe;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.routeChangeSubscribe = this.route.params.subscribe(params => {
      this.store.dispatch(new ProductListActions.GetProducts(params.category));
      this.store.select(selectProductListFeature).subscribe(data => {
        this.products = data.products;
      })
    })
  }

  ngOnDestroy() {
    this.routeChangeSubscribe.unsubscribe();
  }

}
