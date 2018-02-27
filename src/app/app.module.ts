import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgRedux } from 'ng2-redux';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './ordering/orders.module';
import { ShoopingCartService } from './shared/services/Shopping-Cart.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { IAppState, INITIAL_STATE, rootReducer } from './shared/reduxstore/Store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ShoppingModule,
    AdminModule,
    OrdersModule,
    CoreModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private shoppingcartservice: ShoopingCartService) {
      const shoppingcartid = localStorage.getItem('scartid');
      if (shoppingcartid == null) {
        this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
      } else {
        this.shoppingcartservice.loadCartItems();
      }
    }
 }
