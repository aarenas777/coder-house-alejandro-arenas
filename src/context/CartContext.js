import { createContext, useContext, useState } from "react";


export const CartContext = createContext()

export const useCart = () => useContext(CartContext)


export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ]
        )
    }

    return(
    <CartContext.Provider value={{cart, addToCart, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}