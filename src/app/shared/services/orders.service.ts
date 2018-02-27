import { HttpClient } from '@angular/common/http';
import { IAppState } from '../reduxstore/Store';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Http } from '@angular/http';
import { ShoppingCart } from '../models/ShoppingCart';
import { Order } from '../models/Order';
import { Headeroptions } from '../helpers/Constants';

@Injectable()
export class OrdersService {

  url = '/Orders';
  constructor(private http: HttpClient, private ngredux: NgRedux<IAppState>) {

  }

  getOrders(userid) {
return this.http.get(this.url + '/' + userid);
  }

  addoOrder(order: Order) {
    return this.http.post(this.url, JSON.stringify(order));
  }


}
