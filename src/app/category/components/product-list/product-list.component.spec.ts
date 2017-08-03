import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { ProductListComponent } from './product-list.component';
import { ProductListState } from '../../state/product-list.state';
import { Product } from '../../../core/models/product.model';
import * as ProductListActions from '../../actions/product-list.actions';
import { productListReducers } from '../../reducers/product-list.reducers';

class ActivatedRouteStub {
  params = Observable.from([{ category: 'Company' }]);
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: Store<ProductListState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          products: productListReducers
        })
      ],
      declarations: [ ProductListComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should dispatch action to get all products on initialization', () => {
    const action = new ProductListActions.GetAllProducts('Company');
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  describe('GET_ALL_PRODUCTS', () => {
    it('should have empty product array', () => {
      expect(component.products).toEqual([]);
    })

    it('should have loading as true', () => {
      expect(component.loading).toEqual(true);
    })

    it('should have error as null', () => {
      expect(component.error).toBeNull();
    })
  })

  describe('GET_ALL_PRODUCTS_SUCCESS', () => {
    const products: Product[] = [{
      _id: '1',
      category: 'Company',
      description: 'description',
      imageHref: 'imageHref',
      title: 'Title',
      url: 'url'
    }];

    beforeEach(() => {
      const action = new ProductListActions.GetAllProductsSuccess(products);
      store.dispatch(action);
    })
    it('should have product array as payload', () => {
      expect(component.products).toBe(products);
    })

    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    })

    it('should have error as null', () => {
      expect(component.error).toBeNull();
    })
  })

  describe('GET_ALL_PRODUCTS_FAILED', () => {
    const error = 'error';
    beforeEach(() => {
      const action = new ProductListActions.GetAllProductsFailed(error);
      store.dispatch(action);
    })

    it('should have empty product array', () => {
      expect(component.products).toEqual([]);
    })

    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    })

    it('should have error as payload', () => {
      expect(component.error).toBe(error);
    })
  })

});
