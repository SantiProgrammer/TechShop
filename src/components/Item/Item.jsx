import React from "react";
import ItemCount from "../itemCount/ItemCount";
import swal from 'sweetalert'


const Item = ({info}) => {

    const onAdd = (qty) => {
        swal(`Has añadido ${qty} productos al carrito!`);
      }

    return(
        <>
        <div className="item">
            <h2>{info.name}</h2>
            <img src={info.image} alt="" />
            <button>Detalles</button>
            <ItemCount stock={info.stock} initial={1} onAdd={onAdd}/>

        </div>
        </>
    );
}


export default Item;