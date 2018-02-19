import { Product } from "./Product";

export class ShoppingCartItem{
    shoopingCartId;
    productid;
    product: Product;
    quantity;
    
    get totalPrice(){
        return this.product.price * this.quantity;
    }
  
}
