import { OrderDetail } from '../models/OrderDetail';
import { Order } from '../models/Order';
import { ShoppingCart } from '../models/ShoppingCart';
import { ShoppingCartItem } from '../models/shoppingCartItem';

export function ConvertCartToOrder(shoppingCartItems:ShoppingCartItem[]):Order{
let Order:Order={
    name:"",
    address:"",
    phone:"",
    userId:0,
    details:[]
};
for(let cartItem of shoppingCartItems){

    let orderdetail: OrderDetail={

        productId: cartItem.productid,
         quantity: cartItem.quantity
    };

    
    Order.details.push(orderdetail);
}
console.log(Order)
return Order;
}