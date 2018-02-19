import { Headeroptions } from '../helpers/Constants';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';
import { ShoppingCartItem } from '../models/shoppingCartItem';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState, ADD_TO_CART, rootReducer, REMOVE_FROM_CART, CLEAR_CART } from '../reduxstore/Store';
import { ShoppingCart } from '../models/ShoppingCart';
import { localErrorHandler } from '../helpers/HttPErrorHandler';



@Injectable()
export class ShoopingCartService 
{
    url="http://localhost:4566/api/ShoppingCarts"
    constructor(private Http:Http,private ngredux:NgRedux<IAppState>){

    }


 private getItems(cartid){
    //let items;
    return this.Http.get(this.url+"/"+cartid);
 }
 loadCartItems(){
  this.getorcreatecartid().then((cartid)=>{
     this.getItems(cartid).subscribe(result=>{
      let items = result.json();
      let totalquan = 0;
      for(let item of items.shoppingCartItems){
        totalquan += item.quantity;
      }
      this.ngredux.configureStore(rootReducer,
        {cart:new ShoppingCart(cartid,items.shoppingCartItems)});
    })//.subscribe(result=>{
  });
  
 }
  private create()
   {
         return  this.Http.post(this.url,JSON.stringify({}));
    }
  private setcartid(cartid){ 
        localStorage.setItem('scartid',cartid);
    }
    getcartid(){ 
      return localStorage.getItem('scartid');
  }

    async getorcreatecartid(){
      let cartid = this.getcartid();
      if(cartid != null)
      return cartid;
      else
      {
         let response = await this.Http.post(this.url,JSON.stringify({})).toPromise();
         cartid = response.json().id;
         this.setcartid(cartid); 
         return cartid;
       }
    }
   async addToCart(product:Product)
    {
       this.getorcreatecartid().then((cartid)=>{
       let newcartItem =  {productid:product.id as number,shoopingCartId:cartid,quantity:1,product:product}
       return this.Http.put(this.url+"/"+cartid
                       ,JSON.stringify({shoppingCartId:cartid,productId:product.id,quantity:1})
                       ,Headeroptions).subscribe(response=>{
                        this.ngredux.dispatch({type:ADD_TO_CART,cartItem:newcartItem});
                      });
                    }).catch(error=>localErrorHandler(error));
    }
 async removefromCart(product:Product)
    {
       await this.getorcreatecartid().then((cartid)=>{
        let newcartItem =  {productid:product.id as number,shoopingCartId:cartid,quantity:-1,product:product}
        return this.Http.put(this.url+"/"+cartid
                        ,JSON.stringify(newcartItem)
                        ,Headeroptions).subscribe(response=>{
                         this.ngredux.dispatch({type:REMOVE_FROM_CART,productid:product.id});
                       });
       }).catch(error=>localErrorHandler(error));
       
    }
    async clearShoppingCart(){
      let cartid = this.getcartid();
      if(cartid){
        this.Http.delete(this.url+"/"+cartid).subscribe(response=>{
          this.ngredux.dispatch({type:CLEAR_CART});
          localStorage.removeItem('scartid');
        })
      }
    }
}