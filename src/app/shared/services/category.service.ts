import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'



@Injectable()
export class CategoryService {

  url = "http://localhost:4566/api/Categories"

  constructor(private http:Http) { }

  getCategories(){

    return this.http.get(this.url).map(response=>{
      return response.json()
    });


  }
 
}
