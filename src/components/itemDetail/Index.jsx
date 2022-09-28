import ItemCount from "../ItemCount/Index";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [goToCart, SetGoToCart] = useState(false);

  const { addProdruct } = useCartContext();

  const onAdd = (qty) => {
    swal(`Has añadido ${qty} ${data.name} al carrito!`);
    SetGoToCart(true);
    addProdruct(data, qty);
  };

  return (
    <>
      <h2 className="title-detalles">Detalles</h2>
      <div className="detail-container">
        <img src={data.image} alt="" />
        <div className="detail-column">
          <h2>{data.name}</h2>
          <p className="description">{data.description}</p>
          <p className="precio">Precio: $ {data.price}</p>
          <p className="stock">Stock: {data.stock} piezas</p>
          {goToCart ? (
            <Link className="check-out" to="/cart">
              Terminar compra
            </Link>
          ) : (
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
