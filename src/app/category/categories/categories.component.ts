import { Component, OnInit } from '@angular/core';
import { Category } from '../../core/models/category';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.state';
import { selectCategoryFeature } from '../store/selectors';
import * as CategoryActions from '../actions/category.action';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  loading: boolean;
  error: string;

  constructor(private store: Store<AppState>) {
    store.dispatch(new CategoryActions.GetCategory());
    store.select(selectCategoryFeature).subscribe(val => {
      this.categories = val.categoryList;
      this.loading = val.loading;
      this.error = val.error;
    });
  }

  ngOnInit() {
  }

}
