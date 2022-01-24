import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page02PageRoutingModule } from './page02-routing.module';

import { Page02Page } from './page02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page02PageRoutingModule
  ],
  declarations: [Page02Page]
})
export class Page02PageModule {}
