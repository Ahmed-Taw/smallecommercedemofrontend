
import { IAppState } from './../../reduxstore/Store';
import { NgRedux } from 'ng2-redux';
import { Component, OnInit, Input, OnDestroy,OnChanges, SimpleChanges } from '@angular/core';
import { ShoopingCartService } from '../../services/Shopping-Cart.service';

@Component({
  selector: 'app-product-card-actions',
  templateUrl: './product-card-actions.component.html',
  styleUrls: ['./product-card-actions.component.css']
})
export class ProductCardActionsComponent implements OnInit,OnDestroy,OnChanges {


 
  @Input() product;
  cartItem;
  subscribtion;
  constructor(private ngredux: NgRedux<IAppState>,private shoppingCartService:ShoopingCartService) { }

  ngOnInit() {
   
  }
  async addToCart(){
    await this.shoppingCartService.addToCart(this.product);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['product']){
      if(this.product){
        this.subscribtion = this.ngredux.select(state=>
          {
            this.cartItem = state.cart.getItem(this.product.id);
          }).subscribe();
      }
     
    }
  }

  ngOnDestroy(): void {
    if(this.subscribtion)
    this.subscribtion.unsubscribe();
  }
}
