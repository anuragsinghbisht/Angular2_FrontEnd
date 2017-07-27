import { Component, OnInit } from '@angular/core';
import { Category } from '../../core/models/category';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.state';
import { selectCategoryList } from '../../home/store/selectors';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private store: Store<AppState>) {
    store.select(selectCategoryList).subscribe(val => {
      this.categories = val.categories;
    });
  }

  ngOnInit() {
  }

}
