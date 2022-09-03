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
            <Link to={`/detalle/${info.id}`}>Detalles</Link>
            <ItemCount stock={info.stock} initial={1} onAdd={onAdd}/>

        </div>
        </>
    );
}


export default Item;