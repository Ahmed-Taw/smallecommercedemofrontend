import { ShoppingCartItem } from "./shoppingCartItem";

export class ShoppingCart{
    constructor(public id, public shoppingCartItems:ShoppingCartItem[]){

    }
   get totalItems(){
        let quantity = 0;
        for (let shoppingcartitem of this.shoppingCartItems){
            quantity += shoppingcartitem.quantity;
              }
    return quantity;
    }
   get totalAmount(){
        let totalamount = 0;
    for (let shoppingcartitem of this.shoppingCartItems){
    totalamount += (shoppingcartitem.product.price * shoppingcartitem.quantity);
      }    
        return totalamount;
    }
     getItem(productid){
        // console.log(productid);
        // console.log(this.shoppingCartItems.filter(i=>i.productid == productid)[0]);
        return this.shoppingCartItems.filter(i=>i.productid == productid)[0];
    }
}