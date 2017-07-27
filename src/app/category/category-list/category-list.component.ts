import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectCategoryList } from '../../home/store/selectors';

import { Product } from '../../core/models/product';
import { mock } from '../mock-data';

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
      this.store.select(selectCategoryList).subscribe(categoryList => {
        this.products = categoryList.rows.filter(product => product.category === params.category);
      })
    })
  }

  ngOnDestroy() {
    this.routeChangeSubscribe.unsubscribe();
  }

}
