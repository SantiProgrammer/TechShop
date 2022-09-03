import ItemCount from "../itemCount/ItemCount";
import swal from "sweetalert";


const ItemDetail = ({ data }) =>{

    const onAdd = (qty) => {
        swal(`Has añadido ${qty} productos al carrito!`);
      }


    return(
        <>
        <div className="detail-container">
        <img src={data.image} alt="" />
        <div className="detail-column">
            <h2>{data.name}</h2>
            <p className="description">{data.description}</p>
            <p className="precio">Precio: $ {data.price}</p>
            <p className="stock">Stock: {data.stock} piezas</p>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>

        </div>
      
            
        </div>

        </>
    );
}


export default ItemDetail;