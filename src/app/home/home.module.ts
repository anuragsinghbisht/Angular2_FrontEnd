import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { HomeRoutes as routes } from './home.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [BannerComponent]
})
export class HomeModule {}
