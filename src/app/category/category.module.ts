import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { ProductEffects } from './effects/product.effect';
import { CategoryEffects } from './effects/category.effect';
import { CategoryRoutes as routes } from './category.routes';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), EffectsModule.forFeature([CategoryEffects, ProductEffects])],
  declarations: [
    CategoryListComponent,
    CategoryDetailsComponent,
    CategoryFormComponent,
    CategoriesComponent
  ]
})
export class CategoryModule {}
