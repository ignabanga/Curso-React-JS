import React from 'react';
import Counter from './Counter/Counter'

const ItemDetail = ({producto}) => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`);
        
    }
    return (
        <div className='DivItemDetail'>
  <div className="card mb-3">
    <h3 className="card-header">{producto.nombre}</h3>
    <div className="card-body">
    <div className='divImgDetail'><img src={producto.imagen}/></div>
      <p className="card-text"> 
      Info: {producto.info}
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Precio: ${producto.precio}</li>
      <li className="list-group-item">Stock: {producto.stock}</li>
      <li className="list-group-item">Marca: {producto.marca}</li>
      <li className="list-group-item">Envío: {producto.envio}</li>
    </ul>
    <div className="card-body">
     <Counter stock={producto.stock} onAdd={onAdd}/>
    </div>
  </div>
</div>
    );
}

export default ItemDetail;

