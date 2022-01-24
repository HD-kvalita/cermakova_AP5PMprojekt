import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardwardService {

  private api:string = "1ba4c923-e80d-4ba7-a01b-96afd9d32526" 
  constructor(private http: HttpClient) { }

  public getTenObjects() {
    return this.http.get('https://api.harvardartmuseums.org/object?sort=random&size=10&apikey='+ this.api);
  }

  public SearchObjects(SearchResult:string) {
    return this.http.get('https://api.harvardartmuseums.org/object?title=%'+ SearchResult +'%&size=25&apikey=' + this.api);
  }

  


}

