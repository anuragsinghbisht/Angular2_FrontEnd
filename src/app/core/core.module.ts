import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './layout/header/header.component';

import { WebService } from './services/web.service';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  providers: [WebService],
  exports: [HeaderComponent]
})
export class CoreModule { }
