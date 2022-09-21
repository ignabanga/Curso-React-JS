import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../MiniComponents/Spinner';
import { db } from '../../firebase/firebase';
import {doc, getDoc} from 'firebase/firestore';




const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getItemDetail = async (idProd) => {
        try {
            const document = doc(db, "productos", idProd)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setItemDetail(result)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getItemDetail(id)
    }, [id])


    return (isLoading ? <Spinner /> :
        <div className='DivItemDetailContainer'>
            <ItemDetail itemDetailData={itemDetail}/>
        </div>
    );
}

export default ItemDetailContainer;
