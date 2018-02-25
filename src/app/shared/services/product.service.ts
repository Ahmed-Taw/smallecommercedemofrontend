import { Product } from '../models/Product';
import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Headeroptions } from '../helpers/Constants';
import { localErrorHandler } from '../helpers/HttPErrorHandler';


// const Headeroptions = {
//   headers:new Headers({
//     'Content-Type':  'application/json'
//   })
// }
@Injectable()
export class ProductService {

  url = "http://localhost:4566/api/products"
  
  constructor(private http:Http) { }

  getproducts(query){
   let querystring =  this.createquerystring(query);
   return this.http.get(this.url+"?"+querystring).map(respone=>{//"?pageNum="+query.pageNumber+"&pageSize="+query.pageSize+"&categoryId="+query.categoryId).map(respone=>{
      return respone.json();
    },error=>localErrorHandler(error))
  }

  private createquerystring(obj){
let parts:string[] = []
    for(let property in obj){
      if(property != null && property != undefined){
        let value = obj[property];
        parts.push(property+"="+value);
      }
    }
    return parts.join("&");
  }
  getproduct(id){
    return this.http.get(this.url+"/"+id);
  }
  postProduct(product : Product){
    return this.http.post(this.url,JSON.stringify(product),Headeroptions);
  }
  updateProduct(id,product:Product){
    return this.http.put(this.url+"/"+id,JSON.stringify(product),Headeroptions);
  }
  deleteProduct(id){
    return this.http.delete(this.url+"/"+id);
  }

  uploadImage(productId,photo){
    var formdata = new FormData();
    formdata.append('photo',photo);
    console.log(productId);
   return this.http.post(this.url+`/${productId}/Photos`,formdata);
  }
  getImages(productId){
    return this.http.get(this.url +`/${productId}/Photos`);
  }
}
