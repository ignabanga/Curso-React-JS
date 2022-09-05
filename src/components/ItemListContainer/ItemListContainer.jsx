import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import dataItem from '../../data/dataItem'
import ItemList from './Item/ItemList'


const ItemListContainer = () => {

    const [productos, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
    const getItemData = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(dataItem);
        }, 2000);
    });
    getItemData.then((response)=> {
        setProducto(response)
        setIsLoading(false)
    })
    },[]);

    return (isLoading ? <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  </div>
   :
        <div className='DivItemList'>
            <ItemList list={productos} />
        </div>
    );
};

export default ItemListContainer;
