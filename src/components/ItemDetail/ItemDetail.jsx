import React from 'react';
import Counter from './Counter/Counter'


const ItemDetail = ({itemDetailData, onAdd }) => {


  return (
    <> {
      <div className='DivItemDetail'>
        <div className="card mb-3">
          <h3 className="card-header">{itemDetailData.nombre}</h3>
          <div className="card-body">
            <div className='divImgDetail'><img src={itemDetailData.imagen} /></div>
            <p className="card-text">
              Info: {itemDetailData.info}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: ${itemDetailData.precio}</li>
            <li className="list-group-item">Stock: {itemDetailData.stock}</li>
            <li className="list-group-item">Marca: {itemDetailData.marca}</li>
            <li className="list-group-item">Envío: {itemDetailData.envio}</li>
          </ul>
          <div className="card-body">
            <Counter stock={itemDetailData.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default ItemDetail;
