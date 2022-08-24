import React from 'react';
import Counter from './Counter'
import './ItemListContainer.css'

const ItemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }
    return (
        <div className='divCounter'>
            <Counter stock={10} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;
