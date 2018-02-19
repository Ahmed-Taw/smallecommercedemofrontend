import { SharedModule } from './../shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path:'ShoppingCart',
        component:ShoppingCartComponent,
      }
    ])
  ],
  declarations: [
    ShoppingCartComponent
  ],
  providers:[

  ]
})
export class ShoppingModule { }
