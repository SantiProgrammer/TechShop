import React from "react";
import ItemDetail from "../components/itemDetail/ItemDetail";
import { films } from "../utils/data";
import customFetch from "../utils/customFetch";
import {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() =>{
      customFetch(films.find(film => film.id === parseInt(detalleId)))
          .then(result => setData(result))
          .catch(err => console.log(err))
    }, [])


    return(
        <>
        <div className="item-detail-container">

            <ItemDetail data={data}/>

        </div>
        </>
    );
}


export default ItemDetailContainer;