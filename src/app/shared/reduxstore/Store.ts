import { ShoppingCartItem } from "../models/shoppingCartItem";
import {tassign} from'tassign';
import { ShoppingCart } from "../models/ShoppingCart";

export interface IAppState{
     cart:ShoppingCart
}

export const CREATE_CART="cretae shopping cart";

export const ADD_TO_CART="add to cart";

export const CHANGE_QUANTITY ="";

export const DELET_ITEM ="";
export const REMOVE_FROM_CART="remove item from cart";

export const CLEAR_CART="clear cart";

export const INITIAL_STATE: IAppState ={
    cart:new ShoppingCart(0,[])
}

export function rootReducer(state:IAppState,action){
   console.log("reducer");
    switch(action.type){
        case CREATE_CART:
        return tassign(state,{cart:new ShoppingCart(action.cartId,state.cart.shoppingCartItems)});

        case ADD_TO_CART:
        let indexofItem = state.cart.shoppingCartItems.indexOf(state.cart.shoppingCartItems.filter(i=>i.productid == action.cartItem.productid)[0]);
        let modifiedShoppingList;
        if(indexofItem >= 0){
        let existingitem = state.cart.shoppingCartItems.filter(i=>i.productid == action.cartItem.productid)[0];            
            modifiedShoppingList = [].concat(state.cart.shoppingCartItems.slice(0,indexofItem)
            .concat(tassign(existingitem,{productid:existingitem.productid
                                    ,shoopingCartId:existingitem.shoopingCartId
                                    ,quantity:existingitem.quantity+1
                                    ,product:existingitem.product}))
            .concat(state.cart.shoppingCartItems.slice(indexofItem+1)));
        }else{
            modifiedShoppingList = state.cart.shoppingCartItems.concat(action.cartItem);
        }
        return tassign(state,{cart:new ShoppingCart(state.cart.id,modifiedShoppingList)});


        case REMOVE_FROM_CART:
           let existingitem = state.cart.shoppingCartItems.filter(i=>i.productid == action.productid)[0];
             indexofItem = state.cart.shoppingCartItems.indexOf(state.cart.shoppingCartItems.filter(i=>i.productid == action.productid)[0]);
            if(existingitem.quantity == 1){
                modifiedShoppingList = state.cart.shoppingCartItems.filter(i=>i.productid != existingitem.productid)                            
            } else{
                modifiedShoppingList = [].concat(state.cart.shoppingCartItems.slice(0,indexofItem)
                .concat(tassign(existingitem,{productid:existingitem.productid
                                        ,shoopingCartId:existingitem.shoopingCartId
                                        ,quantity:existingitem.quantity-1
                                        ,product:existingitem.product}))
                .concat(state.cart.shoppingCartItems.slice(indexofItem+1)));
            }   
                return tassign(state,{cart:new ShoppingCart(state.cart.id,modifiedShoppingList)});
       
            
         case CLEAR_CART:
          return tassign(state,{cart:new ShoppingCart(0,[])});
          
        default:
           return state;
    }
}