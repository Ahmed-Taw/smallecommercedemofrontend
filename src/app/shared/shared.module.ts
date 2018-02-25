import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductquantityComponent } from './components/productquantity/productquantity.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoopingCartService } from './services/Shopping-Cart.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';
import { OrdersService } from './services/orders.service';
import { AuthGuard } from './services/AuthGuard.service';
import { NgReduxModule } from 'ng2-redux';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardActionsComponent } from './components/product-card-actions/product-card-actions.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductCardComponent,
    ProductquantityComponent,
    ProductCardActionsComponent,
    PaginationComponent
  ],
  exports:[
    ProductCardComponent,
    ProductquantityComponent,
    ProductCardActionsComponent,
    PaginationComponent,
    CommonModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule,
    NgbModule.forRoot().ngModule
  ],
  providers:[
    ShoopingCartService,
    ProductService,
    CategoryService,
    AuthService,
    OrdersService,
    AuthGuard
  ]

})
export class SharedModule { }
