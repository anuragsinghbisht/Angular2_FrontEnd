import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProducts(params['category']))
      .subscribe(products => this.products = products);
  }

  goToDetail(index: number, product: Product): void {
    this.router.navigate(['category', product.category, index])
  }

  hideImageCard(event: any): void {
    event.target.parentElement.hidden = true;
  }

}
