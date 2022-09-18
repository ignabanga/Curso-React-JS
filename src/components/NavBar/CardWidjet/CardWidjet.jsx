import React from 'react';
import './CardWidjet.css'
import carrito from '../../../img/carrito.png'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext';

const CardWidjet = () => {
    const { getTotalProd, productos } = useCartContext();



    return (
        < >{productos.length <= 0 ? <></> :
            <Link to={'/cart'}>
                <span className="span-carrito">
                    {getTotalProd()}
                </span>
                <img className='cart' src={carrito} />
            </Link>
        }
        </>
    );
}

export default CardWidjet;

