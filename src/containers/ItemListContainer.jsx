import { films } from "../utils/data";
import customFetch from "../utils/customFetch";
import {  useState, useEffect } from "react";
import ItemList from '../components/ItemList/ItemList';



const ItemListContainer = ({ texto }) =>{

    const [data, setData] = useState([]);

    useEffect(() =>{
      customFetch(films)
          .then(result => setData(result))
          .catch(err => console.log(err))
    }, [])

    return(
        <>
        <div className="item-list-container">
            <ItemList data={data} />
        </div>

        </>
    );
}


export default ItemListContainer;