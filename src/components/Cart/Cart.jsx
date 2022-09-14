import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css'

const Cart = ({ producto }) => {
    const { addProd, deleteProd, restProd } = useCartContext();

    return (
        <>
            {
                <div className="card mb-3" style={{ maxWidth: 640 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} className="img-carrito rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">
                                    Precio: ${producto.precio}
                                </p>
                                <p className="card-text">
                                    Cantidad: {producto.count}
                                </p>
                                <p className="card-text">
                                    Total: ${producto.count * producto.precio}
                                </p>
                                
                            </div>
                            <div className='divBtn divBtnCart'>
                            <button className='btn btn-primary btn-sm' onClick={() => addProd(producto.id, producto.stock, producto.count)}>
                                    Agregar
                                </button>
                                <button className='btn btn-primary btn-sm' onClick={() => restProd(producto.id, producto.count)}>
                                    Quitar
                                </button>
                                <button className='btn btn-primary btn-sm' onClick={() => deleteProd(producto.id)}>
                                    Eliminar
                                </button>
                                </div>
                        </div>
                    </div>
                </div>




            }
        </>
    );
}

export default Cart;
