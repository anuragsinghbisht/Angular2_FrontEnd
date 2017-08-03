import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControlName, FormGroup } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ProductFormComponent } from './product-form.component';
import { ProductFormState } from '../../state/product-form.state';
import { productFormReducers } from '../../reducers/product-form.reducers';
import { Product } from '../../../core/models/product.model';
import * as ProductFormActions from '../../actions/product-form.actions';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let store: Store<ProductFormState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({ form: productFormReducers }),
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ ProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Form Elements', () => {
    let category, title, url, description, imageHref;
    beforeEach(() => {
      category = component.form.get('category');
      title = component.form.get('title');
      url = component.form.get('url');
      description = component.form.get('description');
      imageHref = component.form.get('imageHref');
    })

    it('should create a form with category,title,url,description and imageHref', () => {
      expect(component.form.contains('category')).toBeTruthy();
      expect(component.form.contains('title')).toBeTruthy();
      expect(component.form.contains('url')).toBeTruthy();
      expect(component.form.contains('description')).toBeTruthy();
      expect(component.form.contains('imageHref')).toBeTruthy();
    });
    it('should be invalid if category is empty', () => {
      category.setValue('');
      expect(category.valid).toBeFalsy()
    });
    it('should be valid if category is not empty', () => {
      category.setValue('category');
      expect(category.valid).toBeTruthy()
    });
    it('should be invalid if title is empty', () => {
      title.setValue('');
      expect(title.valid).toBeFalsy()
    });
    it('should be valid if title is not empty', () => {
      title.setValue('title');
      expect(title.valid).toBeTruthy()
    });
    it('should be invalid if url is empty', () => {
      url.setValue('');
      expect(url.valid).toBeFalsy()
    });
    it('should be valid if url is not empty', () => {
      url.setValue('url');
      expect(url.valid).toBeTruthy()
    });
    it('should be invalid if description is empty', () => {
      description.setValue('');
      expect(description.valid).toBeFalsy()
    });
    it('should be valid if description is not empty', () => {
      description.setValue('description');
      expect(description.valid).toBeTruthy()
    });
    it('should be invalid if imageHref is empty', () => {
      imageHref.setValue('');
      expect(imageHref.valid).toBeFalsy()
    });
    it('should be valid if imageHref is not empty', () => {
      imageHref.setValue('imageHref');
      expect(imageHref.valid).toBeTruthy()
    });
  });

  describe('SUBMIT_PRODUCT', () => {
    beforeEach(() => {
      const action = new ProductFormActions.SubmitProduct(component.form.value);
      store.dispatch(action);
    });
    it('should have loading as true', () => {
      expect(component.loading).toBeTruthy();
    });
    it('should have error as null', () => {
      expect(component.error).toBeNull();
    });
  });

  describe('SUBMIT_PRODUCT_SUCCESS', () => {
    beforeEach(() => {
      const action = new ProductFormActions.SubmitProductSuccess({});
      store.dispatch(action);
    });
    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    });
    it('should have error as null', () => {
      expect(component.error).toBeNull();
    });
  });

  describe('SUBMIT_PRODUCT_FAILED', () => {
    const error = 'error';
    beforeEach(() => {
      const action = new ProductFormActions.SubmitProductFailed(error);
      store.dispatch(action);
    });
    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    });
    it('should have error as action payload', () => {
      expect(component.error).toBe(error);
    });
  });

  describe('onSubmit', () => {
    it('should not submit form, if form is not valid', () => {
      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('submit', null);
      const action = new ProductFormActions.SubmitProduct(component.form.value);
      expect(store.dispatch).not.toBe(action);
      expect(component.form.valid).toBeFalsy();
    });
    it('should submit form, if form is valid', () => {
      component.form.get('category').setValue('value');
      component.form.get('title').setValue('value');
      component.form.get('url').setValue('value');
      component.form.get('description').setValue('value');
      component.form.get('imageHref').setValue('value');
      fixture.detectChanges();
      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('submit', component.form.value);
      const action = new ProductFormActions.SubmitProduct(component.form.value);
      expect(component.form.valid).toBeTruthy();
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  })

});
