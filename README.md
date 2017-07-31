# Angular 2+ Front End Example 

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

