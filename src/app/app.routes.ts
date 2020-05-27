import { Routes } from '@angular/router';
import { NotFoundComponent } from './notfound.component';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'category', loadChildren: './category/category.module#CategoryModule'},
  { path: 'not_found', component: NotFoundComponent },
  { path: "**", redirectTo: "not_found" }
];
