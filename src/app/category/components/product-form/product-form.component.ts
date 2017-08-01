import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.state';
import * as ProductFormActions from '../../actions/product-form.actions';
import { selectProductForm } from '../../state/selectors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  form;
  storeSubscription;
  loading: boolean;
  error: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
      imageHref: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.storeSubscription = this.store.select(selectProductForm).subscribe(state => {
      this.loading = state.loading;
      this.error = state.error;
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new ProductFormActions.SubmitProduct(this.form.value));
    }
  }

}
