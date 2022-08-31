import React,{useState,useEffect} from 'react';
import dataItem from '../../../../data/dataItem';
import ItemDetailList from './ItemDetailList';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([]);
    useEffect(() => {
        const getItemDetailData = new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(dataItem)
            }, 2000);
        })
        getItemDetailData.then((response)=>setItemDetail(response))
        
    },[]);


    return (
        <>
            <ItemDetailList itemDetailData={itemDetail}/>
        </>
    );
}

export default ItemDetailContainer;
