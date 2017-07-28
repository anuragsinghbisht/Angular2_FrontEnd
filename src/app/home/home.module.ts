import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BannerComponent } from './banner/banner.component';
import { HomeRoutes as routes } from './home.routes';
import { HomeEffects } from './effects/home.effects';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), EffectsModule.forFeature([HomeEffects])],
  declarations: [BannerComponent]
})
export class HomeModule {}
