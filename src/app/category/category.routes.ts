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
