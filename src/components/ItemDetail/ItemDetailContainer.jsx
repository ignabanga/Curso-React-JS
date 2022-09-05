import React, { useState, useEffect } from 'react';
import dataItem from '../../data/dataItem';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {

    function onAdd(count) {
        console.log(`Se han seleccionado ${count} productos`);
    }

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getItemDetailData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataItem)
            }, 2000);
        })
        getItemDetailData.then((response) => {
            setItemDetail(response.find(prod => prod.id == id))
            setIsLoading(false)
        })
    }, []);


    return (isLoading ? <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
        :
        <div className='DivItemDetailContainer'>
            <ItemDetail itemDetailData={itemDetail} onAdd={onAdd} />
        </div>

    );
}

export default ItemDetailContainer;
