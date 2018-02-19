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

  getproducts(){
   return this.http.get(this.url).map(respone=>{
      return respone.json();
    },error=>localErrorHandler(error))
  }
  getproduct(id){
    return this.http.get(this.url+"/"+id).map(response=>{
     return response.json();
    },error=>localErrorHandler(error))
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
}
