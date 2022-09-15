import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Ups...</h4>
                    <p className="card-text">
                        El carrito está vacio, vuelve para seguir comprando!
                    </p>
                   <Link className="nav-link" to="/"><button className='btn btn-primary'>Volver</button></Link>
                </div>
            </div>

        </>
    );
}

export default CartEmpty;
