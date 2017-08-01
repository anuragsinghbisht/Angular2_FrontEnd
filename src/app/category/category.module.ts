import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { CategoryEffects } from './effects/category.effects';
import { CategoryRoutes as routes } from './category.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CategoryEffects])
  ],
  declarations: [CategoryListComponent, ProductListComponent, ProductDetailsComponent, ProductFormComponent]
})
export class CategoryModule { }
