import { Component, OnInit } from '@angular/core';
import { InfoModel } from '../../core/models/info.model';
import { WebService } from '../../core/services/web.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as HomeActions from '../actions/home.action';
import { AppState } from '../../app.state';
import { selectInformation, selectLoading, selectError } from '../store/selectors';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  info: InfoModel;
  loading= true;
  error = '';

  constructor(private webService: WebService, private store: Store<AppState>) {
    store.dispatch(new HomeActions.GetTitleAndDescription());
    store.select(selectInformation).subscribe(currentValue => {
      this.info = currentValue;
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
