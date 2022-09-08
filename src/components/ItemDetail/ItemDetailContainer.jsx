import React, { useState, useEffect } from 'react';
import getFetch from '../../data/dataItem';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../MiniComponents/Spinner';




const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFetch.then(response => {
            setItemDetail(response.find(prod => prod.id == id))
            setIsLoading(false)
        })
    }, [id]);


    return (isLoading ? <Spinner /> :
        <div className='DivItemDetailContainer'>
            <ItemDetail itemDetailData={itemDetail}/>
        </div>
    );
}

export default ItemDetailContainer;
