import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import getFetch from '../../data/dataItem'
import Spinner from '../MiniComponents/Spinner';
import ItemList from './Item/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [productos, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoriasId} = useParams();
    useEffect(()=>{
       if(categoriasId){
        getFetch.then(response =>{
            setProducto(response.filter(response => response.categoria == categoriasId))
            setIsLoading(false)
        })
        .catch(err => console.log(err))
       }else {
        getFetch.then(response => {
            setProducto(response)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
       }
    },[categoriasId]);

    return (isLoading ? <Spinner/> :
        <>
        <div className='DivItemList'>
            <ItemList list={productos} />
        </div>
        </>
    );
};

export default ItemListContainer;
