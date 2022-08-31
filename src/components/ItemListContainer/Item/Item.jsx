import React from 'react';

const Item = ({producto}) => {
   
    return (
        <div className='cardDiv'>
            <div className="card border-light mb-3" style={{ maxWidth: "20rem" }}>
                <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                    <img src={producto.imagen} />
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Marca: {producto.marca}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;
