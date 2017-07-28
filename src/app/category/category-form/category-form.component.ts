import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as FormActions from '../actions/form.action';
import { AppState } from '../../app.state';
import { selectFormFeature } from '../store/selectors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form;
  loading: boolean;
  error: string;
  isSuccessfull: boolean;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
      imageHref: ['', Validators.required]
    });
    this.store.select(selectFormFeature).subscribe(data => {
      this.loading = data.loading;
      this.error = data.error;
      this.isSuccessfull = data.isSuccessfull;
    })
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new FormActions.SubmitProduct(this.form.value));
    }
  }
}
