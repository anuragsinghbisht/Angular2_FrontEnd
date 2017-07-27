import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../../core/models/category-list';
import { WebService } from '../../core/services/web.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as HomeActions from '../actions/home.action';
import { AppState } from '../../app.state';
import { selectCategoryList, selectLoading, selectError } from '../store/selectors';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  categoryList: CategoryList;
  loading= true;
  error = '';

  constructor(private webService: WebService, private store: Store<AppState>) {
    store.dispatch(new HomeActions.GetData());
    store.select(selectCategoryList).subscribe(currentValue => {
      this.categoryList = currentValue;
    });
    store.select(selectLoading).subscribe(currentValue => {
      this.loading = currentValue;
    });
    store.select(selectError).subscribe(currentValue => {
      this.error = currentValue;
    });
  }

  ngOnInit() {}

}
