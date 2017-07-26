import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../models/category-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: CategoryList = {
    id: 0,
    title: 'AngularJS Exercise',
    description: '',
    categories: [
      { categoryName: 'Companies' },
      { categoryName: 'Technologies' }
    ],
    rows: []
  }

  constructor() { }

  ngOnInit() {
  }

}
