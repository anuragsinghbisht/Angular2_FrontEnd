import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../../core/models/category-list';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  categoryList: CategoryList = {
    id: 0,
    title: 'AngularJS Exercise',
    description: `This AngularJS exercise showcases how to read online json file.Based on the categories filter the content for each menu item and display in the tabular form. The candidate must make use of third party apis as parsers, and efficient components to support different functionalities expected in this exercise.`,
    categories: [
      { categoryName: 'Companies' },
      { categoryName: 'Technologies' }
    ],
    rows: []
  };

  constructor() { }

  ngOnInit() {
  }

}
