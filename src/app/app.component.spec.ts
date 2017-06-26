import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ProductListComponent,
        ProductDetailsComponent
      ],
      imports: [
        HttpModule,
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        ProductService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
