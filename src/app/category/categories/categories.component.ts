import { Component, OnInit } from '@angular/core';
import { Category } from '../../core/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    { categoryName: 'Companies' },
    { categoryName: 'Technologies' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
