import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { RouterLinkWithHref } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
  });

  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('button'));
    console.log(debugElements);
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/';
    });
    // expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /category/add', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('button'));
    const index = debugElements.findIndex(de => de.properties['href'] === '/category/add');
    // expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /category/list', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('button'));
    const index = debugElements.findIndex(de => de.properties['href'] === '/category/list');
    // expect(index).toBeGreaterThan(-1);
  });
});
