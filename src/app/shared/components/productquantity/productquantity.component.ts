import { IAppState } from '../../reduxstore/Store';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoopingCartService } from '../../services/Shopping-Cart.service';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-productquantity',
  templateUrl: './productquantity.component.html',
  styleUrls: ['./productquantity.component.css']
})
export class ProductQuantityComponent implements OnInit, OnDestroy {
@Input()product;
@Input()smalltextarea;
@Input()largetextarea;
cartItem;
subscribtion;
  constructor(private shoppingCartService: ShoopingCartService, private ngredux: NgRedux<IAppState>) { }

 async ngOnInit() {
 this.subscribtion =   await this.ngredux.select(state => {
        this.cartItem = state.cart.getItem(this.product.id);
      }).subscribe();
  }
  async addToCart() {
    // let newcartItem =  {productid:this.product.id as number,shoopingCartId:this.cartid,quantity:1,product:this.product}
    await this.shoppingCartService.addToCart(this.product);

  }
 async removeFromCart() {
    await this.shoppingCartService.removefromCart(this.product);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
