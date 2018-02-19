import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/services/AuthGuard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:"CheckOut",
        component:CheckOutComponent,
        canActivate:[AuthGuard]
      },
            {
        path:'MyOrders',
        component:OrdersComponent,
        canActivate:[AuthGuard]
      }
    ])
  ],
  declarations: [
    CheckOutComponent,
    OrdersComponent
  ]
})
export class OrdersModule { }
