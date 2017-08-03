import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { BannerComponent } from './banner.component';
import { HomeState } from '../../state/home.state';
import { homeReducer } from '../../reducers/home.reducers';
import { Exercise } from '../../../core/models/exercise.model';
import * as HomeActions from '../../actions/home.actions';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let store: Store<HomeState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          home: homeReducer
        })
      ],
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be dispatch action to get title and description', () => {
    const action = new HomeActions.GetTitleAndDescription();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  describe('GET_TITLE_AND_DESCRIPTION', () => {
    it('should have exercise as empty', () => {
      expect(component.exercise).toEqual({} as Exercise);
    });
    it('should have loading as true', () => {
      expect(component.loading).toBeTruthy();
    });
    it('should have error as null', () => {
      expect(component.error).toBeNull();
    });
  });

  describe('GET_TITLE_AND_DESCRIPTION_SUCCESS', () => {
    const exercise: Exercise = {
      title: 'title',
      description: 'description'
    } ;

    beforeEach(() => {
      const action = new HomeActions.GetTitleAndDescriptionSuccess(exercise);
      store.dispatch(action);
    })
    it('should have exercise as payload', () => {
      expect(component.exercise).toBe(exercise);
    });
    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    });
    it('should have error as null', () => {
      expect(component.error).toBeNull();
    });
  });

  describe('GET_TITLE_AND_DESCRIPTION_FAILED', () => {
    const error = 'error';

    beforeEach(() => {
      const action = new HomeActions.GetTitleAndDescriptionFailed(error);
      store.dispatch(action);
    })
    it('should have exercise as empty', () => {
      expect(component.exercise).toEqual({} as Exercise);
    });
    it('should have loading as false', () => {
      expect(component.loading).toBeFalsy();
    });
    it('should have error as payload', () => {
      expect(component.error).toBe(error);
    });
  });

});
