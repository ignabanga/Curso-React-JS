import React from 'react';
import Counter from '.././Counter'

const Item = ({producto}) => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`);
        
    }
    return (
        <>
            <div className="card border-light mb-3" style={{ maxWidth: "20rem" }}>
                <div className="card-header">{producto.nombre}</div>
                 <div className="card-body">
                    <img src={producto.imagen}/>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Marca: {producto.marca}</p>
            </div>
        <Counter stock={producto.stock} onAdd={onAdd}/>
    </div>

        </>
    );
}

export default Item;
