import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryFormComponent } from './category-form/category-form.component';

export const CategoryRoutes: Routes = [
  { path: 'list/:category', component: CategoryListComponent },
  { path: 'list/:category/:id', component: CategoryDetailsComponent },
  { path: 'add', component: CategoryFormComponent }
];
