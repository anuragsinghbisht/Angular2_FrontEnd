import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ProductDetailsComponent } from './product-details.component';
import * as ProductActions from '../../actions/product.actions';
import { Product } from '../../../core/models/product.model';
import { productReducers } from '../../reducers/product.reducers';
import { ProductState } from '../../state/product.state';

class ActivatedRouteStub {
  params = Observable.from([{ category: 'Company', id: '1' }]);
}

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let store: Store<ProductState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          product: productReducers
        })
      ],
      declarations: [ ProductDetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have been called with an action to get product details', () => {
    const action = new ProductActions.GetProduct({ category: 'Company', productId: '1' });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  describe('GET_PRODUCT', () => {
      it('should have product as empty product', () => {
        expect(component.product).toBeUndefined();
      });

      it('should have loading as true', () => {
        expect(component.loading).toBe(true);
      });

      it('should have error as null', () => {
        expect(component.error).toBe(null);
      });
  });

  describe('GET_PRODUCT_SUCCESS', () => {
      const product: Product = {
        _id: '1',
        category: 'Company',
        description: 'description',
        imageHref: 'imageHref',
        title: 'Title',
        url: 'url'
      };

      beforeEach(() => {
        const action = new ProductActions.GetProductSuccess([product]);
        store.dispatch(action);
      })

      it('should have product as action.payload', () => {
        expect(component.product).toBe(product);
      });

      it('should have loading as false', () => {
        expect(component.loading).toBe(false);
      });

      it('should have error as null', () => {
        expect(component.error).toBe(null);
      });

  });

  describe('GET_PRODUCT_FAILED', () => {
      const error = 'error';

      beforeEach(() => {
        const action = new ProductActions.GetProductFailed(error);
        store.dispatch(action);
      })

      it('should have product as empty ', () => {
        expect(component.product).toBeUndefined();
      });

      it('should have loading as false', () => {
        expect(component.loading).toBe(false);
      });

      it('should have error as action.payload', () => {
        expect(component.error).toBe(error);
      });
  });

});
