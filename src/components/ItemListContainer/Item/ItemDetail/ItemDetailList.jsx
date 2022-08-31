import React from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailList = ({itemDetailData}) => {
    return (
        <> {itemDetailData.map((producto) => (
            <ItemDetail producto={producto} key={producto.id}/>
        ))}
        </>
    );
}

export default ItemDetailList;
