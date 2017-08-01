import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { HomeEffects } from './effects/home.effects';
import { HomeRoutes as routes } from './home.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([HomeEffects])
  ],
  declarations: [BannerComponent]
})
export class HomeModule { }
