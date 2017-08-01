import { Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

export const HomeRoutes: Routes = [
  { path: '', component: BannerComponent, pathMatch: 'full' }
];
