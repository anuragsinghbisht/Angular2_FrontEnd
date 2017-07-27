import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectCategoryList } from '../../home/store/selectors';

import { Product } from '../../core/models/product';
import { mock } from '../mock-data';

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
      this.store.select(selectCategoryList).subscribe(categoryList => {
        categoryList.rows.forEach(prod => {
          if (prod.category === params.category && prod._id === params.id) {
            this.product = prod;
          }
        });
      });
    });
  }

  ngOnDestroy() {
    this.routeParamSubscribe.unsubscribe();
  }
}
