import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className="itemCart">
        <img src={product.image} alt={product.title} />
        <div className="item-cart-info">
          <p>
            {" "}
            <span>
              Nombre: <br />{" "}
            </span>
            {product.name}
          </p>
          <p>
            <span>Precio: </span>${product.price}
          </p>
          <p>
            <span>Cantidad: </span>
            {product.qty}
          </p>
          <p>
            <span>Subtotal: </span>${product.qty * product.price}
          </p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
