import { films } from "../utils/data";
import customFetch from "../utils/customFetch";
import {  useState, useEffect } from "react";
import ItemList from '../components/ItemList/ItemList';
import { useParams } from "react-router-dom";



const ItemListContainer = ({ texto }) =>{

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        if(categoriaId){ //film o item ?
            customFetch(films.filter( film => film.category === categoriaId))
            .then(result => setData(result))
            .catch(err => console.log(err))
        }else{
            customFetch(films)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }

    }, [categoriaId])

    return(
        <>
        <div className="item-list-container">
            <ItemList data={data} />
        </div>

        </>
    );
}


export default ItemListContainer;