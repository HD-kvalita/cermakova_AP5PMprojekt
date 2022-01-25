import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./folder/page01/page01.module').then( m => m.Page01PageModule)
  },
  {
    path: 'page01',
    loadChildren: () => import('./folder/page01/page01.module').then( m => m.Page01PageModule)
  },
  {
    path: 'page02',
    loadChildren: () => import('./folder/page02/page02.module').then( m => m.Page02PageModule)
  },
  {
    path: 'page03',
    loadChildren: () => import('./folder/page03/page03.module').then( m => m.Page03PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
