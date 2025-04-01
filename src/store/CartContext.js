import React, { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
     })

     export const CartProvider = ({children}) => {
        const [items, setItems] = useState([]);

        const addItem = (item) => {
            setItems((prevItems) =>  [...prevItems, item]);

        }

        const removeItem = (id) => {
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));

        }

        return (
            <CartContext.Provider value={{ items, addItem, removeItem}}>
                {children}
            </CartContext.Provider>
        )
     }

     export default CartContext;