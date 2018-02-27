import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../shared/services/orders.service';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orders;
  filterdOrders;
  showActiveOrders = true;
  constructor(private orderservice: OrdersService, private auth: AuthService) {

   }

  ngOnInit() {
    const userId = this.auth.getLoggedInUserId();
    if (userId) {
      this.orderservice.getOrders(userId).subscribe(response => {
        this.orders = response as Order[]
        this.filterdOrders = this.orders.filter(o => o.isDeliverd === !this.showActiveOrders);
      });
    }


  }

  filterdata() {
this.showActiveOrders = !this.showActiveOrders;
this.filterdOrders = this.orders.filter(o => o.isDeliverd === !this.showActiveOrders);
  }
}
