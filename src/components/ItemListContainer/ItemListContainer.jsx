import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import dataItem from '../../data/dataItem'
import ItemList from './Item/ItemList'






const ItemListContainer = () => {

    const [productos, setProducto] = useState([]);

    useEffect(()=>{
    const getItemData = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(dataItem);
        }, 2000);
    });

    getItemData.then((response)=> setProducto(response))

    },[]);

   
    return (
        <>
            <ItemList list={productos} />
        </>
    );
    
};

export default ItemListContainer;
