import React from "react";
import ItemDetail from "../components/itemDetail/ItemDetail";
import { films } from "../utils/data";
import customFetch from "../utils/customFetch";
import {  useState, useEffect } from "react";





const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    useEffect(() =>{
      customFetch(films[0])
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