import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page03Page } from './page03.page';

const routes: Routes = [
  {
    path: '',
    component: Page03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page03PageRoutingModule {}
