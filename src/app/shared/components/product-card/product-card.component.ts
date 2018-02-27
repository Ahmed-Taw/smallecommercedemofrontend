import { ShoppingCartItem } from '../../models/shoppingCartItem';
import { NgRedux, select } from 'ng2-redux';
import { ShoopingCartService } from '../../services/Shopping-Cart.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IAppState, ADD_TO_CART, CREATE_CART, CHANGE_QUANTITY, DELET_ITEM } from '../../reduxstore/Store';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
 @Input() showactions;
 @Input() product: Product;
 minimumValue = 7;
// cartItem;
// cartid;
// subscribtion;
  constructor() {

   }

  ngOnInit() {
    // this.subscribtion = this.ngredux.select(state=>
    //   {
    //     this.cartItem = state.cart.getItem(this.product.id);
    //   }).subscribe()
  }

  // async addToCart(){
  //   await this.shoppingCartService.addToCart(this.product);

  // }
  // removeFromCart(){
  //   this.shoppingCartService.removefromCart(this.product);
  // }

  ngOnDestroy(): void {
    // this.subscribtion.unsubscribe();
  }
}
