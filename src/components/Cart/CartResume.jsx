import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../Context/CartContext';

const CartResume = () => {
    const { productos } = useCartContext();
    const [carritoVacio, setCarrito] = useState(true);
    useEffect(() => {
        if (productos.length !== 0) {
            setCarrito(false)
            console.log(productos)
        } else {
            setCarrito(true)
        }
    }, []);

 
    
    return (
        <>
            {carritoVacio ? <></> :
                <div className='list-group'>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Total: ${}</h5>
                            <button className='btn btn-primary'>Terminar Compra</button>
                        </div>
                    </a>
                </div>

            }
        </>
    );
}

export default CartResume;
