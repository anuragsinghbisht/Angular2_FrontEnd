import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { RouterLinkWithHref } from '@angular/router';

import { HeaderComponent } from './header.component';

function findLink(debugElements, link) {
  return debugElements.findIndex(de => de.properties['href'] === link);
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElements;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule.withRoutes([]), StoreModule.forRoot({}) ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  });

  it('should have a link to /', () => {
    expect(findLink(debugElements, '/')).toBeGreaterThan(-1);
  });

  it('should have a link to /category/add', () => {
    expect(findLink(debugElements, '/category/add')).toBeGreaterThan(-1);
  });

  it('should have a link to /category/list', () => {
    expect(findLink(debugElements, '/category/list')).toBeGreaterThan(-1);
  });
});
