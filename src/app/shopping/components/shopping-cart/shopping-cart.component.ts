import { IAppState, CLEAR_CART } from '../../../shared/reduxstore/Store';
import { NgRedux, select } from 'ng2-redux';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartItem } from '../../../shared/models/shoppingCartItem';
import { ShoopingCartService } from '../../../shared/services/Shopping-Cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
@select(s=>s.cart.shoppingCartItems)cartItems:ShoppingCartItem[];
 @select(s=>s.cart.totalAmount)totalamount;
 @select(s=>s.cart.totalItems)totalitems;
 
  constructor(private ngredux:NgRedux<IAppState>
             ,private shoppingCartService: ShoopingCartService) {
   
   }

  ngOnInit() {

  }
  clearshoppingCart(){
    this.shoppingCartService.clearShoppingCart();
  }
}
