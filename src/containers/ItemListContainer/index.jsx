import React from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import {  useState, useEffect } from "react";
import ItemList from '../../components/ItemList/Index';
import { useParams } from "react-router-dom";
import { getDefaultNormalizer } from '@testing-library/react';



const ItemListContainer = ({ texto }) =>{

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId){ 
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
    }, [categoriaId])

    return(
        <>
        <h2 className="title-catalogo">Catalogo {categoriaId}</h2>
        <div className="item-list-container">
            <ItemList data={data} />
        </div>

        </>
    );
}


export default ItemListContainer;