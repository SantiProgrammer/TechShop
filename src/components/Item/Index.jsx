import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Item = ({ info }) => {
  const nombre = useContext(useCartContext);
  console.log("Item: ", nombre);

  return (
    <>
      <div className="item">
        <h2>{info.name}</h2>
        <img src={info.image} alt="" />
        <p>Precio: ${info.price}</p>
        <Link className="detalles-link" to={`/detalle/${info.id}`}>
          Ver detalles
        </Link>
      </div>
    </>
  );
};

export default Item;
