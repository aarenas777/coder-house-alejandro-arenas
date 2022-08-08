import React, { createContext, useState } from 'react';

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productoCart, setProductoCart ] = useState(defaultValue);
    
    const clearCart = () => {
        setProductoCart([]);
    }

    const isInCart = (nombre) => {
        return productoCart.some((item) => item.item.nombre === nombre)
    }

    const onAdd = (producto, cantCart) => {
        if (isInCart(producto.nombre)) {
            const newCarrito = [...productoCart]
            for (const element of newCarrito) {
                if (element.item.nombre === producto.nombre) {
                    element.quality+=cantCart
                }
            }
            setProductoCart(newCarrito)
            
        } else {
           setProductoCart(
                [...productoCart, {"item": producto, "quality": cantCart}]
            ) 
            
           }
    }
    
    const deleteCart = (nombre) =>{
        const nuevoCart = productoCart.filter( i => i.item.nombre !== nombre);
        setProductoCart(nuevoCart);
    }

    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productoCart,
            onAdd: onAdd,
            clearCart: clearCart,
            deleteCart: deleteCart,
            isInCart: isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    clearCart: () => {},
    deleteCart: (id) => {},
    isInCart: (id) => {},
});

export default CartContext;