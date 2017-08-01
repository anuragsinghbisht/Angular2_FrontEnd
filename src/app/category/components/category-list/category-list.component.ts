import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CategoryActions from '../../actions/category.actions';
import { selectCategories } from '../../state/selectors';
import { AppState } from '../../../app.state';
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categories: Category[];
  loading: boolean;
  error: string;
  storeSubscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new CategoryActions.GetAllCategories());
    this.storeSubscription = this.store.select(selectCategories).subscribe(state => {
      this.categories = state.categories;
      this.loading = state.loading;
      this.error = state.error;
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
