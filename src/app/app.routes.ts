import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'category', loadChildren: './category/category.module#CategoryModule'}
];
