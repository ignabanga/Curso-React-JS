import React from 'react';
import { useCartContext } from '../../Context/CartContext';

const CartResume = () => {
    const { getTotalPrice, clearCart, carritoVacio} = useCartContext();

    
    return (
        <>
            {carritoVacio ? <></> :
                <div className='list-group'>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total: ${getTotalPrice()}</h5>
                            <button className='btn btn-primary'>Terminar Compra</button>
                            <button className='btn btn-primary' onClick={()=> clearCart()}>Limpiar Carrito</button>
                        </div>
                    </a>
                </div>
            }
        </>
    );
}

export default CartResume;
