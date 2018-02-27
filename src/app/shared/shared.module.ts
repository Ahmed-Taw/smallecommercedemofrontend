import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductQuantityComponent } from './components/productquantity/productquantity.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../interceptor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule,
    NgbModule.forRoot()
    // EffectsModule.([effects]),
    // StoreModule.provideStore([
    //   rootReducer
   // ])
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductCardActionsComponent,
    PaginationComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductCardActionsComponent,
    PaginationComponent,
    CommonModule,
    FormsModule,
    NgReduxModule,
    RouterModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    ShoopingCartService,
    ProductService,
    CategoryService,
    AuthService,
    OrdersService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ]

})
export class SharedModule { }
