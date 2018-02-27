import { Headeroptions } from './../helpers/Constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class CategoryService {

  url = '/Products/Categories';

  constructor(private http: HttpClient) { }

  getCategories() {

    return this.http.get(this.url);
    // .map(response => {
    //   return response.json();
    // });


  }

}
