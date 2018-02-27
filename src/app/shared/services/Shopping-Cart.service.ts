import { Headeroptions } from '../helpers/Constants';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from '../models/Product';
import { ShoppingCartItem } from '../models/shoppingCartItem';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState, ADD_TO_CART, rootReducer, REMOVE_FROM_CART, CLEAR_CART } from '../reduxstore/Store';
import { ShoppingCart } from '../models/ShoppingCart';
import { localErrorHandler } from '../helpers/HttPErrorHandler';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ShoopingCartService {
    url = '/ShoppingCarts';
    constructor(private http: HttpClient, private ngredux: NgRedux<IAppState>) {

    }

 private getItems(cartid) {
    return this.http.get(this.url + '/' + cartid);
 }
 loadCartItems() {
  this.getorcreatecartid().then((cartid) => {
     this.getItems(cartid).subscribe(result => {
      const cart = result as ShoppingCart;
      let totalquan = 0;
      for (const item of cart.shoppingCartItems) {
        totalquan += item.quantity;
      }
      this.ngredux.configureStore(rootReducer,
        {cart: new ShoppingCart(cartid, cart.shoppingCartItems)});
    }); // subscribe(result=>{
  });

 }
  private create() {
         return  this.http.post(this.url, JSON.stringify({}));
    }
  private setcartid(cartid) {
        localStorage.setItem('scartid', cartid);
    }
    getcartid() {
      return localStorage.getItem('scartid');
  }

    async getorcreatecartid() {
      let cartid = this.getcartid();
      if (cartid != null) {
      return cartid;
      } else {
         const response = await this.http.post(this.url, JSON.stringify({})).toPromise();
         cartid = (response as ShoppingCart).id;
         this.setcartid(cartid);
         return cartid;
       }
    }
   async addToCart(product: Product) {
       this.getorcreatecartid().then((cartid) => {
       const newcartItem =  {productid: product.id as number, shoopingCartId: cartid, quantity: 1, product: product};
       return this.http.put(this.url + '/' + cartid
                       , JSON.stringify({shoppingCartId: cartid, productId: product.id, quantity: 1})
                       ).subscribe(response => {
                        this.ngredux.dispatch({type: ADD_TO_CART, cartItem: newcartItem});
                      });
                    }).catch(error => localErrorHandler(error));
    }
 async removefromCart(product: Product) {
       await this.getorcreatecartid().then((cartid) => {
        const newcartItem =  {productid: product.id as number, shoopingCartId: cartid, quantity: -1, product: product};
        return this.http.put(this.url + '/' + cartid
                        , JSON.stringify(newcartItem)
                        ).subscribe(response => {
                         this.ngredux.dispatch({type: REMOVE_FROM_CART, productid: product.id});
                       });
       }).catch(error => localErrorHandler(error));

    }
    async clearShoppingCart() {
      const cartid = this.getcartid();
      if (cartid) {
        this.http.delete(this.url + '/' + cartid).subscribe(response => {
          this.ngredux.dispatch({type: CLEAR_CART});
          localStorage.removeItem('scartid');
        });
      }
    }
}
