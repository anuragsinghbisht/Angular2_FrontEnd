import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeParamSubscribe = this.route.params.subscribe(params => {
      mock[0].rows.forEach(prod => {
        if (prod.category === params.category && prod.id === params.id) {
          this.product = prod;
          console.log(this.product);
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeParamSubscribe.unsubscribe();
  }
}
