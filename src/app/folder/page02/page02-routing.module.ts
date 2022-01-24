import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page02Page } from './page02.page';

const routes: Routes = [
  {
    path: '',
    component: Page02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page02PageRoutingModule {}
