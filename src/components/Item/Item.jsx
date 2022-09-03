import React from "react";
import ItemCount from "../itemCount/ItemCount";
import swal from 'sweetalert'
import { Link } from "react-router-dom";


const Item = ({info,id}) => {

    const onAdd = (qty) => {
        swal(`Has añadido ${qty} productos al carrito!`);
      }

    return(
        <>
        <div className="item">
            <h2>{info.name}</h2>
            <img src={info.image} alt="" />
            <p>Precio: ${info.price}</p>
    
            <ItemCount stock={info.stock} initial={1} onAdd={onAdd}/>
            <Link className="detalles-link" to={`/detalle/${info.id}`}>Ver detalles</Link>

        </div>
        </>
    );
}


export default Item;