import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { CategoryListComponent } from './category-list.component';
import * as CategoryActions from '../../actions/category.actions';
import { CategoryState } from '../../state/category.state';
import { Category } from '../../../core/models/category.model';
import { categoryReducers } from './../../reducers/category.reducers';


describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let store: Store<CategoryState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          categories: categoryReducers
        })
      ],
      declarations: [ CategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have been called with an action to get all categories', () => {
    const action = new CategoryActions.GetAllCategories();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  })

  describe('GET_ALL_CATEGORIES', () => {
      it('should have categories as empty array', () => {
        expect(component.categories).toEqual([]);
      });

      it('should have loading as true', () => {
        expect(component.loading).toBe(true);
      });

      it('should have error as null', () => {
        expect(component.error).toBe(null);
      });
  });

  describe('GET_ALL_CATEGORIES_SUCCESS', () => {
      const categories: Category[] = [{ categoryName: 'company' }];

      beforeEach(() => {
        const action = new CategoryActions.GetAllCategoriesSuccess(categories);
        store.dispatch(action);
      })

      it('should have categories as action.payload', () => {
        expect(component.categories).toBe(categories);
      });

      it('should have loading as false', () => {
        expect(component.loading).toBe(false);
      });

      it('should have error as null', () => {
        expect(component.error).toBe(null);
      });

  });

  describe('GET_ALL_CATEGORIES_FAILED', () => {
      const error = 'error';

      beforeEach(() => {
        const action = new CategoryActions.GetAllCategoriesFailed(error);
        store.dispatch(action);
      })

      it('should have categories as empty array', () => {
        expect(component.categories).toEqual([]);
      });

      it('should have loading as false', () => {
        expect(component.loading).toBe(false);
      });

      it('should have error as action.payload', () => {
        expect(component.error).toBe(error);
      });
  });

});
