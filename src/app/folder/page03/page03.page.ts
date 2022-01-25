import { Component, OnInit } from '@angular/core';
import {HardwardService} from '../../api/hardward.service';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.page.html',
  styleUrls: ['./page03.page.scss'],
})
export class Page03Page implements OnInit {
  OB: Observable<any>;
  exhibition: Object[];
  exhibitionObject: any;

  Favorites:any[] = [];

  constructor(private hardwardService: HardwardService)
  {
    this.getStorage();
  }

  getStorage(){
    for( var i = 0, len = localStorage.length; i < len; ++i){
      this.Favorites.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    this.Favorites = Object.keys(this.Favorites).map(key => ({
      name: key,
      value: this.Favorites[key]
    }));
    console.log(this.Favorites[0].value[0].img);

  }

  delete(object:any){
    localStorage.removeItem(object.value[0].name);
    window.location.reload();
  }

  ngOnInit() {
  }

}
