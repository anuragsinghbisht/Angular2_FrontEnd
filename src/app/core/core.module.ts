import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';

import { WebService } from './services/web.service';

@NgModule({
  imports: [ RouterModule, SharedModule ],
  declarations: [HeaderComponent],
  providers: [ WebService ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {}
