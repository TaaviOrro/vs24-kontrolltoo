import React, { createContext, useReducer } from 'react';

const initialCartState = {
    items: [],
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if(existingItem) {
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        }
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.item, quantity: 1 }];
      }
      return {
        items: updatedItems,
    }

    }
    if (action.type === 'CLEAR_CART'){
        return { items: [] };
    }
}

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
     })

     export const CartProvider = ({children}) => {
        const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

        const addItemToCart = (item) => {
            dispatchCartAction({ type: 'ADD_ITEM', item });

        }

        return (
            <CartContext.Provider value={{ items: cartState.items, addItem: addItemToCart}}>
                {children}
            </CartContext.Provider>
        )
     }

     export default CartContext;