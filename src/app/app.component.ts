import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Page01Page } from './folder/page01/page01.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rootPage:any =Page01Page;

  public appPages = [
    { title: 'Collections', url: '/page01', icon: 'map' },
    { title: 'Search', url: '/page02', icon: 'search' },
    { title: 'Favorites', url: '/page03', icon: 'star' },
  ];
  public labels = [];
  
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
