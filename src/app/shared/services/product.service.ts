import { Product } from '../models/Product';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Headeroptions } from '../helpers/Constants';
import { localErrorHandler } from '../helpers/HttPErrorHandler';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  url = '/products';
  constructor(private http: HttpClient) { }
  getproducts(query) {
   const querystring =  this.createquerystring(query);
   return this.http.get(this.url + '?' + querystring);
  //  .map(respone => {
  //     return respone.json();
  //   }, error => localErrorHandler(error));
  }
  private createquerystring(obj) {
const parts: string[] = [];
    for (const property in obj) {
      if (property !== null && property !== undefined) {
        const value = obj[property];
        parts.push(property +  '=' + value);
      }
    }
    return parts.join('&');
  }
  getproduct(id) {
    return this.http.get(this.url + '/' + id);
  }
  postProduct(product: Product) {
    return this.http.post(this.url, JSON.stringify(product));
  }
  updateProduct(id, product: Product) {
    return this.http.put(this.url +  '/' + id, JSON.stringify(product));
  }
  deleteProduct(id) {
    return this.http.delete(this.url +  '/' + id);
  }

  uploadImage(productId, photo) {
    const formdata = new FormData();
    formdata.append('photo', photo);
    console.log(productId);
   return this.http.post(this.url + `/${productId}/Photos` , formdata);
  }
  getImages(productId) {
    return this.http.get(this.url + `/${productId}/Photos` );
  }
}
