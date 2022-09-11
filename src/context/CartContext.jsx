import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart);

    const addProdruct = (item, qty) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, qty: product.qty + qty} : product
            }));
        } else {
            setCart([...cart, {...item, qty}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.price * act.qty, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.qty, 0);
    

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProdruct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}
