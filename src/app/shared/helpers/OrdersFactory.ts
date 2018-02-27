import { OrderDetail } from '../models/OrderDetail';
import { Order } from '../models/Order';
import { ShoppingCart } from '../models/ShoppingCart';
import { ShoppingCartItem } from '../models/shoppingCartItem';

export function ConvertCartToOrder(shoppingCartItems: ShoppingCartItem[]): Order {
const order: Order = {
    name: '',
    address: '',
    phone: '',
    userId: 0,
    details: []
};
for (const cartItem of shoppingCartItems) {

    const orderdetail: OrderDetail = {

        productId: cartItem.productid,
         quantity: cartItem.quantity
    };


    order.details.push(orderdetail);
}
console.log(order);
return order;
}
