import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/Index';

const Cart = () => {
    const { cart,totalPrice,clearCart} = useCartContext();

    if(cart.length === 0){
        return(
            <>
            <div className="cart-card" >
                <h1>No hay productos en el carrito 😔</h1>
                <Link className='check-out' to='/catalogo'>⬅️ Hacer compras</Link>
            </div>

            </>
        );

    }else {
        return(
            <>
            <div className="cart-container">
                <h2>Checkout <img src="https://cdn-icons-png.flaticon.com/512/8354/8354645.png" alt="" /> </h2>
            <div className="cart-card">
                    {
                    cart.map(product => <ItemCart key={product.id} product={product}/>)
                    }
            </div>
            <div className='cart-footer' >
                <p>Total: $ {totalPrice()}</p>
                <button onClick={() => clearCart()} >Vaciar carrito</button>
            </div>
            </div>
            </>
        )
    }

                    
   
}

export default Cart
