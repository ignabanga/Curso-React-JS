import React from 'react';
import Counter from './Counter/Counter';
import { Link } from 'react-router-dom';


const ItemDetail = ({ itemDetailData }) => {


  return (
    <> {itemDetailData.stock == 0 ?
      <>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Ups...</h4>
            <p className="card-text">
              Lo sentimos, este producto se encuentra sin stock actualmente!
            </p>
            <Link className="nav-link" to="/"><button className='btn btn-primary'>Volver</button></Link>
          </div>
        </div>
      </>
      :
      <div className='DivItemDetail'>
        <div className="card mb-3">
          <h3 className="card-header">{itemDetailData.nombre}</h3>
          <div className="card-body">
            <div className='divImgDetail'><img src={itemDetailData.imagen} /></div>
            <p className="card-text">
              {itemDetailData.info}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: ${itemDetailData.precio}</li>
            <li className="list-group-item">Stock: {itemDetailData.stock}</li>
            <li className="list-group-item">Marca: {itemDetailData.marca}</li>
          </ul>
          <div className="card-body">
            <Counter stock={itemDetailData.stock} producto={itemDetailData} />
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default ItemDetail;
