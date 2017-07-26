import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoryRoutes as routes } from './category.routes';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CategoryListComponent,
    CategoryDetailsComponent,
    CategoryFormComponent,
    CategoriesComponent
  ]
})
export class CategoryModule {}
