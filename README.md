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
`Note : Basic knowledge of creating angular appliction using @angular/cli for this tutorial is required for this tutorial. This tutorial is more of step-by-step guide to integrate angular project with @ngrx`

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

### Create *Shared* module to contain components shared by different modules in application
- Create *core* module `ng g m shared` using *@angular/cli*
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
- Import `WebService` and provide *web.service.ts* in the *core.module.ts*
    `providers: [WebService],`
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

