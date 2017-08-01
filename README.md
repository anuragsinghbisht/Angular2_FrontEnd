# Angular 2+ With Redux (ngrx)

 [![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/anuragsinghbisht/Angular2_FrontEnd) [![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=website&style=flat-square)](https://angular-backend.herokuapp.com/)

## Project Setup
- Clone repository `https://github.com/anuragsinghbisht/Angular2_FrontEnd.git`
- Dependencies : `node > 6.9.1` & `@angular/cli`
- Install dependencies: `npm install`
- Start Server: `npm start`
- Build project: `npm run build`
- Generating Documentation: `npm run compodoc`

`Note - Backend for this project is another github repository.` 
[Angular Backend!](https://github.com/anuragsinghbisht/Angular2_Backend) 

## Overview

- *Home Page* : Displays Title And Description. 
- *Navigation Panel* : Icons for Home Page, Add Product & Categories Page
- *Categories Page* : Displays categories
- *Category List Page* : Display list of product related to particular category
- *Category Details Page*: Displayes details of selected product
- *Add Product Page* : Form to enter product details 

## Technology Stack
- @angular/cli
- angular-material
- @ngrx/store, @ngrx/core, @ngrx/effects

## Folder Structure
```
app
├──  app.module.ts
├──  app.component[ts/html/css]
├──  app.routes.ts
├──  app.reducers.ts
├──  app.state.ts
├──  app.effects.ts
├──   core
|   ├── core.module.ts
|   ├── services
|   |   └── web.service.ts
|   ├── models
|   |   └──  category/product/info.model
|   └── header [header.component]
├──   shared
|   └──  shared.module.ts
├──   home
|   ├── home.module.ts
|   ├── home.routes.ts
|   ├── actions
|   |   └── home.action.ts
|   ├── reducers
|   |   └──  home.reducers.ts
|   ├── effects
|   |   └──  home.effects.ts
|   ├── store
|   |   └──  home.state.ts / selectors.ts
|   └── banner [banner.component]
├──   category
|   ├── category.module.ts
|   ├── category.routes.ts
|   ├── actions
|   |   └── [category/form/product-list/product].action.ts
|   ├── reducers
|   |   └── [category/form/product-list/product].reducer.ts
|   ├── effects
|   |   └── [category/product].effects.ts
|   ├── store
|   |   ├──  selectors.ts
|   |   └── [category/form/product-list/product].state.ts
|   ├── categories  [categories.component]
|   ├── category-details  [category-details.component]
|   ├── category-form  [category-form.component] 
|   └── category-list (cateory-list.component)
└── mock-list.ts
```
## Tutorial
`Note : This tutorial is step-by-step guide to integrate angular project with @ngrx. Basic knowledge of angular2+ and @angular/cli is required to understand the code.`

### Create Project using @angular/cli
- Create Project using *@angular/cli* (v 1.2.1) & install project dependencies
    ```
    ng new angular-frontend
    cd angular-frontend
    npm install
    ```
- Run `npm start` to deploy project at `localhost:4200`. Go to the localhost in your browser to see the created project.
- Add coommonly used `rxjs` operators in `app.module.ts`.
    ```typescript
    // adding rx operators
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/filter';
    import 'rxjs/add/operator/switchMap';
    import 'rxjs/add/operator/catch';
    import 'rxjs/add/operator/do';
    import 'rxjs/add/operator/finally';
    import 'rxjs/add/observable/of';
    ```

### Add angular-material to the project
- Install *@angular/material* & *material-design-icons*
    ```
    npm i -S @angular/material @angular/cdk material-design-icons 
    ```
- To show icons available in material-icons, we need to add *material-icons.css* in *.angular-cli.json*. 
    ```typescript
    "styles": [
        "../node_modules/material-design-icons/iconfont/material-icons.css",
        "styles.css"
      ]
    ```
- Import *MaterialModule* and *BrowserAnimationsModule* in *app.module.ts* and add both in the `imports` array.
    ```typescript
    import { MaterialModule } from '@angular/material';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    ...
    imports: [ BrowserModule,MaterialModule, BrowserAnimationsModule]
    ...
  ]
    ```
- Import *material prebuilt themes* in the *style.css*
    `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

### Add @ngrx to the angular project
- Install @ngrx/core @ngrx/store @nrgx/effects @ngrx/store-devtools
    ```
    npm i -S @ngrx/core @ngrx/store @ngrx/effects @ngrx/store-devtools ngrx-store-freeze
    ```
- Import `ngrx modules` in *app.module.ts*
    ```typescript
        import { StoreModule } from '@ngrx/store';
        import { StoreDevtoolsModule } from '@ngrx/store-devtools';
        import { EffectsModule } from '@ngrx/effects';
    ```
- Add `modules` to the `AppModule` ( reducers/metaReducers/AppEffects to be added later)
    ```typescript
        imports: [
            StoreModule.forRoot({}),
            StoreDevtoolsModule.instrument(),
            EffectsModule.forRoot([]),
        ]
    ```

### Create *Shared* module to contain components shared by different modules in application
- Create *shared* module `ng g m shared` using *@angular/cli*
- Add common modules to be shared across application.
    ```typescript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { MaterialModule } from '@angular/material';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    
    @NgModule({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule],
      declarations: [],
      exports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule]
    })
    export class SharedModule {}
    ```
- Add *SharedModule* and remove *MaterialModule* from *app.module.ts*  
    ```typescript
    import { SharedModule } from './shared/shared.module';
    ... 
        imports: [SharedModule] 
    ...
    ```
### Create  *Core* Module to contain application-wide services/models/layout
- Create *core* module `ng g m core` using *@angular/cli*. Update *core.module.ts* to contain *SharedModule* which contains *MaterialModule.
    ```typescript
        import { SharedModule } from '../shared/shared.module'
    ```
- Create *layout* folder to contain common components that will be used only one in the application. Let's create header component, which will contian 3 navigation items - home/add-product/category-list
    ```
    ng g c core/layout/header
    ```
    - This will generate 3 files in **core/layout/header** folder
    - header.component[ts/html/css]
    - In *header.component.ts*, selector field contains the name **app-header** by which we can use this component in other html files
    - In *core.module.js*, *angular-cli* will automatically add the *HeaderComponent* in the file and the *declarations*.
    - In *core.module.js*, add *HeaderComponent* in the exports variable also, as we will use it in other modules.
        ```typescript
        exports: [HeaderComponent]
        ```
- Add *header* in header.component.html.
    ```html
    <md-toolbar color="primary">
      <span>Angular JS</span>
      <span class="fill-space"></span>
      <button md-icon-button><md-icon>home</md-icon></button>
      <button md-icon-button><md-icon>add</md-icon></button>
      <button md-icon-button><md-icon>dashboard</md-icon></button>
    </md-toolbar>
    ```
- Add *app-header* in the *app.component.html*
    ```html
        <app-header></app-header>
    ```
- Create *web.service.ts* to retrieve data from backend `ng g m core/services/web`
- 
    ```typescript
    import { Injectable } from '@angular/core';
    import { Http } from '@angular/http';
    
    @Injectable()
    export class WebService {
      BASE_URL = 'https://angular-backend.herokuapp.com/api';
    
      constructor(private http: Http) {}
    
      getTitleAndDescription() {
        return this.http.get(this.BASE_URL).map(res => res.json());
      }
    
      getCategories() {
        return this.http.get(`${this.BASE_URL}/category`).map(res => res.json());
      }
    
      getProducts(category) {
        return this.http
          .get(`${this.BASE_URL}/${category}/product`)
          .map(res => res.json());
      }
    
      getProduct({ category, productId }) {
        return this.http
          .get(`${this.BASE_URL}/${category}/product/${productId}`)
          .map(res => res.json());
      }
    
      submitProduct(product) {
        return this.http
          .post(`${this.BASE_URL}/product`, product)
          .map(res => res.json());
      }
    }
    ```
- Import `WebService`, `HTTPModule`, `RouterModule` in the *core.module.ts*
    ```typescript
        import { RouterModule } from '@angular/router';
        import { HttpModule } from '@angular/http';
        import { WebService } from './services/web.service';
    ```
- Add `WebService` in the `providers` array.
    ```typescript
    `providers: [WebService],`
    ```
- Create `Models` for the application in the `core` module
    - `Exercise Model` - Create `core/models/exercise.model.ts`
        ```typescript
        export interface Exercise {
          title: string;
          description: string;
        }
        ```
    - `Category Model`- Create `core/models/category.model.ts`
        ```typescript
            export interface Category {
              categoryName: string;
            }
        ```
    - `Product Model`- Create `core/models/product.model.ts`
        ```typescript
            export interface Product {
              _id: string;
              title: string;
              category: string;
              url: string;
              description: string;
              imageHref: string;
            }
        ```
### Create *Home* module to display home page 
- Create *home* module `ng g m home`
- Create `BannerComponent` to contain title and description `ng g c home/components/banner`
- Create *app.routes.ts* which contains routes array for the entire application.
    ```typescript
    import { Routes } from '@angular/router';
    export const routes: Routes = [
      { path: '', loadChildren: './home/home.module#HomeModule'} //lazyloading
    ];
    ```
- Import `routes` in *app.module.ts*. Also Import `RouterModule` from `@angular/router`. Then declare it in the `AppModule`
    ```typescript
    import { RouterModule } from '@angular/router';
    import { routes } from './app.routes';
    ...
    imports: [RouterModule.forRoot(routes)]
    ...
    ```
- Create *home.routes.ts* to declare routes for the *HomeModule*
    ```typescript
    import { Routes } from '@angular/router';
    import { BannerComponent } from './components/banner/banner.component';
    export const HomeRoutes: Routes = [
      { path: '', component: BannerComponent }
    ];
    ```
- Add `HomeRoutes` in the *home.module.ts*
    ```typescript
    import { NgModule } from '@angular/core';
    import { SharedModule } from '../shared/shared.module';
    import { BannerComponent } from './components/banner/banner.component';
    import { RouterModule } from '@angular/router';
    
    import { HomeRoutes as routes } from './home.routes';
    
    @NgModule({
      imports: [
        SharedModule,
        RouterModule.forChild(routes)
      ],
      declarations: [BannerComponent]
    })
    export class HomeModule { }
    ```
- Add `router-outlet` in *app.component.html* to render the components depending upon the routes
    ```html
    <app-header></app-header>
    <router-outlet></router-outlet>
    ```
- Add `actions` folder in home. Inside *actions* folder, create *home.actions.ts* file.
    ```typescript
    import { Action } from '@ngrx/store';

    export const GET_TITLE_AND_DESCRIPTION = 'GET_TITLE_AND_DESCRIPTION';
    export const GET_TITLE_AND_DESCRIPTION_SUCCESS = 'GET_TITLE_AND_DESCRIPTION_SUCCESS';
    export const GET_TITLE_AND_DESCRIPTION_FAILED = 'GET_TITLE_AND_DESCRIPTION_FAILED';
    
    export class GetTitleAndDescription implements Action {
      readonly type = GET_TITLE_AND_DESCRIPTION;
    }
    export class GetTitleAndDescriptionSuccess implements Action {
      readonly type = GET_TITLE_AND_DESCRIPTION_SUCCESS;
      constructor(public payload: any) {}
    }
    export class GetTitleAndDescriptionFailed implements Action {
      readonly type = GET_TITLE_AND_DESCRIPTION_FAILED;
      constructor(public payload: any) {}
    }
    export type All = GetTitleAndDescription | GetTitleAndDescriptionFailed | GetTitleAndDescriptionSuccess;
    ```
- Add `state` folder in the `home`. Create `home.state.ts` 
    ```typescript
    import { Exercise } from '../../core/models/exercise.model';
    export interface HomeState {
      exercise: Exercise;
      loading: boolean;
      error: string;
    }

    ```
- Add `reducers` folder in the `home`. Create `home.reducers.ts`.
    ```typescript
    import * as HomeActions from '../actions/home.actions';
    import { HomeState } from '../state/home.state';
    import { Exercise } from '../../core/models/exercise.model';
    
    export type Action = HomeActions.All;
    
    const initialState: HomeState = {
      exercise: {} as Exercise,
      loading: false,
      error: null
    };
    
    export function homeReducer(state: HomeState = initialState, action: Action) {
      switch (action.type) {
        case HomeActions.GET_TITLE_AND_DESCRIPTION: {
          return {
            ...state,
            loading: true
          };
        }
        case HomeActions.GET_TITLE_AND_DESCRIPTION_SUCCESS: {
          return {
            ...state,
            loading: false,
            exercise: action.payload
          };
        }
        case HomeActions.GET_TITLE_AND_DESCRIPTION_FAILED: {
          return {
            ...state,
            loading: false,
            error: action.payload,
            exercise: {} as Exercise
          };
        }
        default: {
          return state;
        }
      }
    }
    ```
- Add `selectors.ts` to create function which will return the home state from the store.
    ```typescript
        import { createSelector, createFeatureSelector } from '@ngrx/store';
        import { HomeState } from './home.state';
        
        export const selectHomeState = createFeatureSelector<HomeState>('home');
    ```
- Create `app.state.ts` to store the store at the app level.
    ```typescript
        import { HomeState } from './home/state/home.state';

        export interface AppState {
          home: HomeState;
        }
    ```
- Create `app.reducers.ts`
    ```typescript
        import { combineReducers, compose } from '@ngrx/store';
        import { AppState } from './app.state';
        import { storeFreeze } from 'ngrx-store-freeze';
        
        import { homeReducer } from './home/reducers/home.reducers';
        
        export const reducers = {
          home: homeReducer
        };
        
        export const metaReducers = [ storeFreeze ];
    ```
- Add `reducers` in the `AppModule`
    ```typescript
        import { reducers, metaReducers } from './app.reducers';
    ```
- Add `reducers` and `metaReducers` to `StoreModule` in `AppModule`
    ```typescript
        StoreModule.forRoot(reducers, { metaReducers }),
    ```
- Add `home.effects.ts` to listen to the `GET_TITLE_AND_DESCRIPTION` action.
    ```typescript
        import { Injectable } from '@angular/core';
        import { Effect, Actions } from '@ngrx/effects';
        import { Action, Store } from '@ngrx/store';
        import { Observable } from 'rxjs/Observable';
        
        import { AppState } from '../../app.state';
        import { WebService } from '../../core/services/web.service';
        import * as HomeActions from '../actions/home.actions';
        
        @Injectable()
        export class HomeEffects {
        
          @Effect() getTitleAndDescription$: Observable<HomeActions.All> = this.actions
            .ofType(HomeActions.GET_TITLE_AND_DESCRIPTION)
            .switchMap((action: HomeActions.All) => this.webService.getTitleAndDescription())
            .map((data: any) => (new HomeActions.GetTitleAndDescriptionSuccess(data)));
        
          constructor(
            private store: Store<AppState>,
            private webService: WebService,
            private actions: Actions
          ) {}
        }
    ```
- Add `HomeEffects` to the `HomeModule`
    ```typescript
    import { EffectsModule } from '@ngrx/effects';
    import { HomeEffects } from './effects/home.effects';
    ```
    ```typescript
    imports: [ EffectsModule.forFeature([HomeEffects])],
    ```
- Update *banner.component.ts* to dispatch `GET_TITLE_AND_DESCRIPTION` action and subscribe to data retrieved.
    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { Store } from '@ngrx/store';
    import { AppState } from '../../../app.state';
    import { selectHomeState } from '../../state/selectors';
    import { Exercise } from '../../../core/models/exercise.model';
    import * as HomeActions from '../../actions/home.actions';
    
    @Component({
      selector: 'app-banner',
      templateUrl: './banner.component.html',
      styleUrls: ['./banner.component.css']
    })
    export class BannerComponent implements OnInit {
      exercise: Exercise;
      loading: boolean;
      error: string;
    
      constructor(private store: Store<AppState>) {}
    
      ngOnInit() {
        this.store.dispatch(new HomeActions.GetTitleAndDescription());
        this.store.select(selectHomeState).subscribe(state => {
          this.exercise = state.exercise;
          this.loading = state.loading;
          this.error = state.error;
        });
      }
    }
    ```
- Update *banner.component.html* to consume the data retrieved.
    ```html
        <md-card *ngIf="!loading">
          <md-card-header>
            <md-card-title>{{ exercise.title }}</md-card-title>
          </md-card-header>
          <md-card-content>
            <p>{{ exercise.description }}</p>
          </md-card-content>
          <md-card-actions>
            <button md-button routerLink="/category/list">
              <md-icon>dashboard</md-icon>
              <span>Categories</span>
            </button>
            <button md-button routerLink="/category/add">
              <md-icon>add</md-icon>
              <span>Add Product</span>
            </button>
          </md-card-actions>
        </md-card>
    ```
### Create *Category* module to store the category details.
- Create `Category` module using @angular-cli
    ```node
        ng g m category
    ```
- Create `category-list` component which will contain the list of all the categories available.
    ```node
        ng g c category/components/category-list
    ```
- Create `product-list` component which will contain the list of all the products available in a category.
    ```node
        ng g c category/components/product-list
    ```
- Create `product-form` component to add product.
    ```node
        ng g c category/components/product-form
    ```
- Create `product-details` component which will contain the details of selected product.
    ```node
        ng g c category/components/product-details
    ```
- Update *app.routes.ts* to store a path for `CategoryModule`
    ```typescript
        { path: 'category', loadChildren: './category/category.module#CategoryModule'}
    ```
- Create *category.routes.ts* to cantain paths for different components - CategoryListComponent, ProductListComponent, ProductDetailsComponent
     ```typescript
        import { Routes } from '@angular/router';
        import { CategoryListComponent } from './components/category-list/category-list.component';
        import { ProductListComponent } from './components/product-list/product-list.component';
        import { ProductDetailsComponent } from './components/product-details/product-details.component';
        import { ProductFormComponent } from './components/product-form/product-form.component';
        
        export const CategoryRoutes: Routes = [
          { path: 'list', component: CategoryListComponent },
          { path: 'list/:category', component: ProductListComponent },
          { path: 'list/:category/:id', component: ProductDetailsComponent },
          { path: 'add', component: ProductFormComponent },
        ];
    ```
- Update `CategoryModule` to contain the `routes` and `SharedModule`
    ```typescript
        import { NgModule } from '@angular/core';
        import { RouterModule } from '@angular/router';
        import { SharedModule } from '../shared/shared.module';
        import { CategoryListComponent } from './components/category-list/category-list.component';
        import { ProductListComponent } from './components/product-list/product-list.component';
        import { ProductDetailsComponent } from './components/product-details/product-details.component';
        import { ProductFormComponent } from './components/product-form/product-form.component';
        import { CategoryRoutes as routes } from './category.routes';
        
        @NgModule({
          imports: [
            SharedModule,
            RouterModule.forChild(routes)
          ],
          declarations: [CategoryListComponent, ProductListComponent, ProductDetailsComponent, ProductFormComponent]
        })
        export class CategoryModule { }
    ``` 
- Create `action` files for all four components 
    - **app/category/actions/category.actions.ts**
    ```typescript
        import { Action } from '@ngrx/store';
        
        export const  GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
        export const  GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
        export const  GET_ALL_CATEGORIES_FAILED = 'GET_ALL_CATEGORIES_FAILED';
        
        export class GetAllCategories implements Action {
          readonly type = GET_ALL_CATEGORIES;
        }
        
        export class GetAllCategoriesSuccess implements Action {
          readonly type = GET_ALL_CATEGORIES_SUCCESS;
          constructor(public payload: any) {}
        }
        
        export class GetAllCategoriesFailed implements Action {
          readonly type = GET_ALL_CATEGORIES_FAILED;
          constructor(public payload: any) {}
        }
        
        export type All = GetAllCategories | GetAllCategoriesSuccess | GetAllCategoriesFailed;

    ```
    - **app/category/actions/product-list.actions.ts**
    ```typescript
        import { Action } from '@ngrx/store';

        export const  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
        export const  GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
        export const  GET_ALL_PRODUCTS_FAILED = 'GET_ALL_PRODUCTS_FAILED';
        
        export class GetAllProducts implements Action {
          readonly type = GET_ALL_PRODUCTS;
          constructor(public payload: any) {}
        }
        
        export class GetAllProductsSuccess implements Action {
          readonly type = GET_ALL_PRODUCTS_SUCCESS;
          constructor(public payload: any) {}
        }
        
        export class GetAllProductsFailed implements Action {
          readonly type = GET_ALL_PRODUCTS_FAILED;
          constructor(public payload: any) {}
        }
        
        export type All = GetAllProducts | GetAllProductsSuccess | GetAllProductsFailed;

    ```
    - **app/category/actions/product.actions.ts**
    ```typescript
        import { Action } from '@ngrx/store';

        export const  GET_PRODUCT = 'GET_PRODUCT';
        export const  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
        export const  GET_PRODUCT_FAILED = 'GET_PRODUCT_FAILED';
        
        export class GetProduct implements Action {
          readonly type = GET_PRODUCT;
          constructor(public payload: any) {}
        }
        
        export class GetProductSuccess implements Action {
          readonly type = GET_PRODUCT_SUCCESS;
          constructor(public payload: any) {}
        }
        
        export class GetProductFailed implements Action {
          readonly type = GET_PRODUCT_FAILED;
          constructor(public payload: any) {}
        }
        
        export type All = GetProduct | GetProductSuccess | GetProductFailed;
    ```
    - **app/category/actions/product-form.actions.ts**
    ```typescript
        import { Action } from '@ngrx/store';
        
        export const  SUBMIT_PRODUCT = 'SUBMIT_PRODUCT';
        export const  SUBMIT_PRODUCT_SUCCESS = 'SUBMIT_PRODUCT_SUCCESS';
        export const  SUBMIT_PRODUCT_FAILED = 'SUBMIT_PRODUCT_FAILED';
        
        export class SubmitProduct implements Action {
          readonly type = SUBMIT_PRODUCT;
          constructor(public payload: any) {}
        }
        
        export class SubmitProductSuccess implements Action {
          readonly type = SUBMIT_PRODUCT_SUCCESS;
          constructor(public payload: any) {}
        }
        
        export class SubmitProductFailed implements Action {
          readonly type = SUBMIT_PRODUCT_FAILED;
          constructor(public payload: any) {}
        }
        
        export type All = SubmitProduct | SubmitProductSuccess | SubmitProductFailed;
    ```
- Create state files for the 4 components
    - **app/category/state/category.state.ts**
    ```typescript
        import { Category } from '../../core/models/category.model';

        export interface CategoryState {
          categories: Category[];
          loading: boolean;
          error: string;
        }

    ```
    - **app/category/state/product-list.state.ts**
    ```typescript
        import { Product } from '../../core/models/product.model';

        export interface ProductListState {
          products: Product[];
          loading: boolean;
          error: string;
        }

    ```
    - **app/category/state/product.state.ts**
    ```typescript
        import { Product } from '../../core/models/product.model';
        
        export interface ProductState {
          product: Product[];
          loading: boolean;
          error: string;
        }
    ```
    - **app/category/state/product-form.state.ts**
    ```typescript
        import { Product } from '../../core/models/product.model';
        
        export interface ProductFormState {
          loading: boolean;
          error: string;
        }
    ```
- Create selectors to select the appropriate state from our compoenents **selectors.ts**
    ```typescript
        import { createFeatureSelector } from '@ngrx/store';
        import { CategoryState } from './category.state';
        import { ProductState } from './product.state';
        import { ProductListState } from './product-list.state';
        import { ProductFormState } from './product-form.state';
        
        export const selectCategories = createFeatureSelector<CategoryState>('categories');
        export const selectProducts = createFeatureSelector<ProductListState>('products');
        export const selectProduct = createFeatureSelector<ProductState>('product');
        export const selectProductForm = createFeatureSelector<ProductFormState>('form');

    ```
- Create reducers for the four components
    - **app/category/reducers/category.reducers.ts**
    ```typescript
        import * as CategoryActions from '../actions/category.actions';
        import { Category } from '../../core/models/category.model';
        import { CategoryState } from '../state/category.state';
        
        const initialState: CategoryState = {
          categories: [] as Category[],
          loading: false,
          error: null
        };
        
        export type Action = CategoryActions.All;
        
        export function categoryReducers (state: CategoryState = initialState, action: Action) {
          switch (action.type) {
            case CategoryActions.GET_ALL_CATEGORIES: {
              return {
                ...state,
                loading: true
              };
            }
            case CategoryActions.GET_ALL_CATEGORIES_SUCCESS: {
              return {
                ...state,
                loading: false,
                categories: action.payload
              };
            }
            case CategoryActions.GET_ALL_CATEGORIES_FAILED: {
              return {
                ...state,
                loading: false,
                categories: [] as Category[],
                error: action.payload
              };
            }
            default:
                return state;
          }
        }

    ```
    - **app/category/reducers/product-list.reducers.ts**
    ```typescript
        import * as ProductActions from '../actions/product-list.actions';
        import { Product } from '../../core/models/product.model';
        import { ProductListState } from '../state/product-list.state';
        
        const initialState: ProductListState = {
          products: [] as Product[],
          loading: false,
          error: null
        };
        
        export type Action = ProductActions.All;
        
        export function categoryReducers (state: ProductListState = initialState, action: Action) {
          switch (action.type) {
            case ProductActions.GET_ALL_PRODUCTS: {
              return {
                ...state,
                loading: true
              };
            }
            case ProductActions.GET_ALL_PRODUCTS_SUCCESS: {
              return {
                ...state,
                loading: false,
                products: action.payload
              };
            }
            case ProductActions.GET_ALL_PRODUCTS_FAILED: {
              return {
                ...state,
                loading: false,
                products: [] as Product[],
                error: action.payload
              };
            }
            default:
                return state;
          }
        }

    ```
    - **app/category/reducers/product.reducers.ts**
    ```typescript
        import * as ProductActions from '../actions/product.actions';
        import { Product } from '../../core/models/product.model';
        import { ProductState } from '../state/product.state';
        
        const initialState: ProductState = {
          product: [] as Product[],
          loading: false,
          error: null
        };
        
        export type Action = ProductActions.All;
        
        export function categoryReducers (state: ProductState = initialState, action: Action) {
          switch (action.type) {
            case ProductActions.GET_PRODUCT: {
              return {
                ...state,
                loading: true
              };
            }
            case ProductActions.GET_PRODUCT_SUCCESS: {
              return {
                ...state,
                loading: false,
                product: action.payload
              };
            }
            case ProductActions.GET_PRODUCT_FAILED: {
              return {
                ...state,
                loading: false,
                product: [] as Product[],
                error: action.payload
              };
            }
            default:
                return state;
          }
        }

    ```
    - **app/category/reducers/product-form.reducers.ts**
    ```typescript
        import * as ProductFormActions from '../actions/product-form.actions';
        import { ProductFormState } from '../state/product-form.state';
        
        const initialState: ProductFormState = {
          loading: false,
          error: null
        };
        
        export type Action = ProductFormActions.All;
        
        export function productReducers (state: ProductFormState = initialState, action: Action) {
          switch (action.type) {
            case ProductFormActions.SUBMIT_PRODUCT: {
              return {
                ...state,
                loading: true
              };
            }
            case ProductFormActions.SUBMIT_PRODUCT_SUCCESS: {
              return {
                ...state,
                loading: false
              };
            }
            case ProductFormActions.SUBMIT_PRODUCT_FAILED: {
              return {
                ...state,
                loading: false,
                error: action.payload
              };
            }
            default:
                return state;
          }
        }
    ```
- Update `AppState` to accomodate newly added state.
    ```typescript
        import { HomeState } from './home/state/home.state';
        import { CategoryState } from './category/state/category.state';
        import { ProductListState } from './category/state/product-list.state';
        import { ProductState } from './category/state/product.state';
        import { ProductFormState } from './category/state/product-form.state';
        
        export interface AppState {
          home: HomeState;
          categories: CategoryState;
          products: ProductListState;
          product: ProductState;
          form: ProductFormState;
        }

    ```
- Update `app.reducers.ts` to accomodate newly added reducers
    ```typescript
        import { categoryReducers } from './category/reducers/category.reducers';
        import { productListReducers } from './category/reducers/product-list.reducers';
        import { productReducers } from './category/reducers/product.reducers';
        import { productFormReducers } from './category/reducers/product-form.reducers';
        
        export const reducers = {
          home: homeReducer,
          categories: categoryReducers,
          products: productListReducers,
          product: productReducers,
          form: productFormReducers
        };
    ```
- Create effects file **category.effects.ts** to listen to events
    ```typescript
        import { Injectable } from '@angular/core';
        import { Effect, Actions } from '@ngrx/effects';
        import { Action, Store } from '@ngrx/store';
        import { Observable } from 'rxjs/Observable';
        import { Router } from '@angular/router';
        
        import * as CategoryActions from '../actions/category.actions';
        import * as ProductListActions from '../actions/product-list.actions';
        import * as ProductActions from '../actions/product.actions';
        import * as ProductFormActions from '../actions/product-form.actions';
        
        import { WebService } from '../../core/services/web.service';
        import { AppState } from '../../app.state';
        
        @Injectable()
        export class CategoryEffects {
        
          @Effect() getCategories$: Observable<Action> = this.actions$
            .ofType(CategoryActions.GET_ALL_CATEGORIES)
            .switchMap((action: CategoryActions.All) => this.webService.getCategories())
            .map((data: any) => (new CategoryActions.GetAllCategoriesSuccess(data)));
        
          @Effect() getProducts$: Observable<Action> = this.actions$
            .ofType(ProductListActions.GET_ALL_PRODUCTS)
            .switchMap((action: ProductListActions.All) => this.webService.getProducts(action.payload))
            .map((data: any) => (new ProductListActions.GetAllProductsSuccess(data)));
        
          @Effect() getProduct$: Observable<Action> = this.actions$
            .ofType(ProductActions.GET_PRODUCT)
            .switchMap((action: ProductActions.All) => this.webService.getProduct(action.payload))
            .map((data: any) => (new ProductActions.GetProductSuccess(data)));
        
          @Effect({ dispatch: false }) submitProduct$: Observable<Action> = this.actions$
            .ofType(ProductFormActions.SUBMIT_PRODUCT)
            .switchMap((action: ProductFormActions.All) => this.webService.submitProduct(action.payload))
            .do(() => this.router.navigate(['category', 'list']));

        
        
          constructor(
            private store: Store<AppState>,
            private actions$: Actions,
            private webService: WebService,
            private router: Router
          ) {}
        }
    ```
- Add `CategoryEffects` in the `CategoryModule`
    ```typescript
        import { EffectsModule } from '@ngrx/effects';
        import { CategoryEffects } from './effects/category.effects';
    ```
    ```typescript
        imports: [ EffectsModule.forFeature([CategoryEffects]) ]
    ```
- Update `component-list.component.ts` to dispatch `GET_ALL_CATEGORIES` action.
    ```typescript
        import { Component, OnInit, OnDestroy } from '@angular/core';
        import { Store } from '@ngrx/store';
        
        import * as CategoryActions from '../../actions/category.actions';
        import { selectCategories } from '../../state/selectors';
        import { AppState } from '../../../app.state';
        import { Category } from '../../../core/models/category.model';
        
        @Component({
          selector: 'app-category-list',
          templateUrl: './category-list.component.html',
          styleUrls: ['./category-list.component.css']
        })
        export class CategoryListComponent implements OnInit, OnDestroy {
          categories: Category[];
          loading: boolean;
          error: string;
          storeSubscription;
        
          constructor(private store: Store<AppState>) {}
        
          ngOnInit() {
            this.store.dispatch(new CategoryActions.GetAllCategories());
            this.storeSubscription = this.store.select(selectCategories).subscribe(state => {
              this.categories = state.categories;
              this.loading = state.loading;
              this.error = state.error;
            });
          }
        
          ngOnDestroy() {
            this.storeSubscription.unsubscribe();
          }
        
        }
    ```
- Update `category-list.component.html` accordingly.
    ```html
    <md-card *ngIf="!!categories.length">
      <md-nav-list>
        <h3 md-subheader>Categories</h3>
        <md-list-item
          mdTooltip="Click to go to {{category.categoryName}}" mdTooltipPosition="below"
          [routerLink]="['/category','list',category.categoryName]"
          *ngFor="let category of categories">
          <md-icon md-list-icon>widgets</md-icon>
          <h4 md-line>{{ category.categoryName }}</h4>
        </md-list-item>
      </md-nav-list>
    </md-card>
    ```
- Update `product-list.component.ts` to dispatch `GET_ALL_PRODUCTS` action and display product list belonging to particular category
    ```typescript
        import { Component, OnInit, OnDestroy } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';
        import { Store } from '@ngrx/store';
        
        import { AppState } from '../../../app.state';
        import { Product } from '../../../core/models/product.model';
        import * as ProductListActions from '../../actions/product-list.actions';
        import { selectProducts } from '../../state/selectors';
        
        @Component({
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css']
        })
        export class ProductListComponent implements OnInit, OnDestroy {
          products: Product[];
          loading: boolean;
          error: string;
          routeSubscription;
          storeSubscription;
        
          constructor(
            private store: Store<AppState>,
            private route: ActivatedRoute) { }
        
          ngOnInit() {
            this.routeSubscription = this.route.params.subscribe(params => {
              const category = params.category;
              this.store.dispatch(new ProductListActions.GetAllProducts(category));
              this.storeSubscription = this.store.select(selectProducts).subscribe(state => {
                this.products = state.products;
                this.loading = state.loading;
                this.error = state.error;
              });
            });
          }
        
          ngOnDestroy () {
            this.routeSubscription.unsubscribe();
            this.storeSubscription.unsubscribe();
          }
        
        }

    ```
- Update `product-list.component.html` to display the product-list
    ```typescript
        <div class="product-list">
          <md-card
            mdTooltip="Click to go to details page" mdTooltipPosition="above"
            [routerLink]='["/category","list",product.category,product._id]'
            *ngFor="let product of products">
            <md-card-header>
              <div md-card-avatar class="avatar"> {{ product.title.split("")[0] }}</div>
              <md-card-title>{{product.title}}</md-card-title>
              <md-card-subtitle>{{product.category}}</md-card-subtitle>
            </md-card-header>
            <div
              md-card-image
              class="product-image"
              [ngStyle]="{backgroundImage: 'url('+product.imageHref+')'}"></div>
            <md-card-content>
              <p>
                {{product.description}}
              </p>
              <p>
                <md-icon>open in new</md-icon>
                <a href="{{product.url}}">{{product.url}}</a>
              </p>
            </md-card-content>
          </md-card>
        </div>

    ```
- Update `product-details.component.ts` to dispatch `GET_PRODUCT` action and display product details of the selected product
    ```typescript
        import { Component, OnInit, OnDestroy } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';
        import { Store } from '@ngrx/store';
        
        import * as ProductActions from '../../actions/product.actions';
        import { AppState } from '../../../app.state';
        import { Product } from '../../../core/models/product.model';
        import { selectProduct } from '../../state/selectors';
        
        @Component({
          selector: 'app-product-details',
          templateUrl: './product-details.component.html',
          styleUrls: ['./product-details.component.css']
        })
        export class ProductDetailsComponent implements OnInit, OnDestroy {
          product: Product;
          loading: boolean;
          error: string;
          routeSubscription;
          stateSubscription;
        
          constructor(
            private route: ActivatedRoute,
            private store: Store<AppState>
          ) { }
        
          ngOnInit() {
            this.routeSubscription = this.route.params.subscribe(params => {
              const category = params.category;
              const productId = params.id;
              this.store.dispatch(new ProductActions.GetProduct({ category, productId}));
              this.stateSubscription = this.store.select(selectProduct).subscribe(state => {
                this.product = state.product[0];
                this.loading = state.loading;
                this.error = state.error;
              });
            });
          }
        
          ngOnDestroy() {
            this.routeSubscription.unsubscribe();
            this.stateSubscription.unsubscribe();
          }
        
        }
    ```
- Update `product-list.component.html` to display the product details
    ```html
        <md-card class="product-card" *ngIf="!!product">
          <div
            class="product-image"
            [ngStyle]="{backgroundImage: 'url('+product.imageHref+')'}"></div>
            <div class="product-info">
              <md-card-header>
                <div md-card-avatar class="avatar"> {{ product.title.split("")[0] }}</div>
                <md-card-title>{{product.title}}</md-card-title>
                <md-card-subtitle>{{product.category}}</md-card-subtitle>
              </md-card-header>
              <md-card-content>
                <p>
                  {{product.description}}
                </p>
                <p>
                  <md-icon>open in new</md-icon>
                  <a href="{{product.url}}">{{product.url}}</a>
                </p>
              </md-card-content>
            </div>
        </md-card>
    ```
- Update `product-form.component.ts` to dispatch submit action when form is submitted.
    ```typescript
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

    ```
- Update `product.form.component.html` to display form to enter product details
    ```html
        <md-card>
          <h3 md-header>Add Product</h3>
          <form
            [formGroup]="form"
            (ngSubmit) = "onSubmit()">
            <p>
              <md-input-container>
                <input type="text" mdInput formControlName="category" placeholder="Category">
              </md-input-container>
            </p>
            <p>
              <md-input-container>
                <input type="text" mdInput formControlName="title" placeholder="Title">
              </md-input-container>
            </p>
            <p>
              <md-input-container>
                <input type="url" mdInput formControlName="url" placeholder="URL">
              </md-input-container>
            </p>
            <p>
              <md-input-container>
                <textarea type="text" mdInput formControlName="description" placeholder="Description"></textarea>
              </md-input-container>
            </p>
            <p>
              <md-input-container>
                <input type="url" mdInput formControlName="imageHref" placeholder="Image URL">
              </md-input-container>
            </p>
            <p [ngStyle]="{ textAlign: 'center' }">
              <button md-raised-button color="primary">
                Submit
              </button>
            </p>
          </form>
        </md-card>

    ```
