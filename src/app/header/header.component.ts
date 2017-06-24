import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductList } from '../product-list';
import { Product } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  categoryList: string[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getTitle().then(title => {
      this.title = title
    });
    this.productService.getCategoryList().then(categoryList => this.categoryList = categoryList);
  }

}
