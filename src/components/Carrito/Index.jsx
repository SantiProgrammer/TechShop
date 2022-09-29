import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/Index";
import {
  doc,
  collection,
  serverTimestamp,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../../firebase/config";
import swal from "sweetalert";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Santiago",
        email: "santi.iztli@gmail.com",
        phone: "+52 5512308812",
        address: "Calle de mi casa #3",
      },
      items: cart.map((producto) => ({
        id: producto.id,
        title: producto.name,
        price: producto.price,
        quantity: producto.qty,
      })),
      total: totalPrice(),
      date: serverTimestamp(),
    };
    const createOrderInFirebase = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirebase()
      .then((result) => swal("Orden creada con exito! Id: " + result.id))
      .catch((error) => console.log(error));

    cart.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });

    clearCart();
  };

  if (cart.length === 0) {
    return (
      <>
        <div className="cart-card-checkout">
          <img
            src="https://www.shoreexcursioneer.com/mobile/images/mini-empty-cart.png"
            alt=""
          />
          <h1>Tu carrito está vacío..</h1>
          <Link className="check-out" to="/catalogo">
            ⬅️ Hacer compras
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="cart-container">
          <h2>
            Checkout{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/8354/8354645.png"
              alt=""
            />{" "}
          </h2>
          <div className="cart-card">
            {cart.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
          </div>
          <div className="cart-footer">
            <p>Total: $ {totalPrice()}</p>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <button className="check-out" onClick={createOrder}>
              Terminar la compra
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
