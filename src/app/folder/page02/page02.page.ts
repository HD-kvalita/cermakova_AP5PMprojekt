import { Component, OnInit } from '@angular/core';
import {HardwardService} from '../../api/hardward.service';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.page.html',
  styleUrls: ['./page02.page.scss'],
})
export class Page02Page implements OnInit {
  OB: Observable<any>;
  Search: Object[];
  Searchs:any;


  constructor(private hardwardService: HardwardService) {
   }

  SearchFce(SearchObject:string){
     
    this.OB=this.hardwardService.SearchObjects(SearchObject);
    this.OB.subscribe( (data) =>
    {
    this.Search = data.records;
    this.Searchs = Object.keys(this.Search).map(key => ({ key: key, value: this.Search[key], names: this.Search[key].people }));
    console.log(this.Searchs);
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
