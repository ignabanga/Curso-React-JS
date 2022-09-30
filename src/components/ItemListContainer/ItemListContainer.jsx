import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import Spinner from '../MiniComponents/Spinner';
import ItemList from './Item/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore'




const ItemListContainer = () => {

  const [productos, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoriasId } = useParams();


  const getProducto = async (categoria) => {
    try {
      setIsLoading(true)
      const document = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria))
        : collection(db, "productos")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setProducto(result)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducto(categoriasId)
  }, [categoriasId])




  return (isLoading ? <Spinner /> :

    <div className='divItemList'>
      <ItemList list={productos} />
    </div>

  );
};

export default ItemListContainer;
