import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const CartResume = () => {
    const { getTotalPrice, clearCart} = useCartContext();

    
    return (
        <>
            {
                <div className='list-group divResume'>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total: ${getTotalPrice()}</h5>
                            <Link className='nav-link item-nav-link'to='/checkout'>
                            <button className='btn btn-primary'>Finalizar Compra</button>
                            </Link>
                            <button className='btn btn-primary' onClick={()=> clearCart()}>Limpiar Carrito</button>
                        </div>
                    </a>
                </div>
            }
        </>
    );
}

export default CartResume;
