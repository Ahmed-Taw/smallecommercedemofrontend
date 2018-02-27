import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { OrdersService } from '../../../shared/services/orders.service';
import { IAppState, CLEAR_CART } from '../../../shared/reduxstore/Store';
import { ShoppingCartItem } from '../../../shared/models/shoppingCartItem';
import { Component, OnInit } from '@angular/core';
import { select, NgRedux} from 'ng2-redux';
import { ConvertCartToOrder } from '../../../shared/helpers/OrdersFactory';
import { Order } from '../../../shared/models/Order';
import { ShoopingCartService } from '../../../shared/services/Shopping-Cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  name: string;
  address: string;
  phone;
  @select(s => s.cart)cart;
  @select(s => s.cart.totalItems)itemsCount;
  @select(s => s.cart.shoppingCartItems)cartItems: ShoppingCartItem[];
  @select(s => s.cart.totalAmount)totalamount;
  constructor(private ngredux: NgRedux<IAppState>,
               private orderservice: OrdersService,
               private route: Router,
               private auth: AuthService,
              private shoppingcartservice: ShoopingCartService) {
  }

  ngOnInit() {

  }

 async placeOrder() {
  let items;
   this.ngredux.select(s => {
      items = s.cart.shoppingCartItems;
   }).subscribe(value => {
    const order: Order = ConvertCartToOrder(items);
    order.name = this.name;
    order.address = this.address;
    order.phone = this.phone;
    order.userId = this.auth.getLoggedInUserId();
    console.log(order);

 this.orderservice.addoOrder(order).subscribe(response => {
   this.shoppingcartservice.clearShoppingCart();
 this.route.navigate(['/']);
 });

   });
     }
}
