import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page03PageRoutingModule } from './page03-routing.module';

import { Page03Page } from './page03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page03PageRoutingModule
  ],
  declarations: [Page03Page]
})
export class Page03PageModule {}
