import { Component, OnInit } from '@angular/core';
import {HardwardService} from '../../api/hardward.service';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-page01',
  templateUrl: './page01.page.html',
  styleUrls: ['./page01.page.scss'],
})
export class Page01Page implements OnInit {
  OB: Observable<any>;
  objectTen: Object[];
  objectsTen: any;
  

  constructor(private hardwardService: HardwardService) 
  {

    this.OB=this.hardwardService.getTenObjects();
    this.OB.subscribe( (data) =>
    {
    this.objectTen = data.records;
    this.objectsTen = Object.keys(this.objectTen).map(key => ({ key: key, value: this.objectTen[key], names: this.objectTen[key].people }));
    console.log(this.objectsTen);
    });

  }

  Favorites:any;

  addFavorite(object:any){
      this.Favorites= JSON.stringify([{
        name: object.value.title,
        department: object.value.department,
        division: object.value.division,
        century: object.value.century,
        culture: object.value.culture,
        description: object.value.description,
        img:object.value.primaryimageurl

      }])

      this.setStorage(object.value.title);
  }


  setStorage(name:any){
    localStorage.setItem(name,this.Favorites);
    console.log("save");
  }


  ngOnInit() {
  }

}
