import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description: string;
  title: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getDescription().then(description => {
      this.description = description
    });
    this.productService.getTitle().then(title => {
      this.title = title
    });
  }
}
