import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.state';
import { selectHomeState } from '../../state/selectors';
import { Exercise } from '../../../core/models/exercise.model';
import * as HomeActions from '../../actions/home.actions';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  exercise: Exercise;
  loading: boolean;
  error: string;
  storeSubscription;

  constructor(private store: Store<AppState>) {
    this.storeSubscription = this.store.select(selectHomeState).subscribe(state => {
      this.exercise = state.exercise;
      this.loading = state.loading;
      this.error = state.error;
    });
  }

  ngOnInit() {
    this.store.dispatch(new HomeActions.GetTitleAndDescription());
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
