import React from 'react';
import './CardWidjet.css'
import carrito from '../../../img/carrito.png'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext';

const CardWidjet = () => {
    const {getTotalProd} = useCartContext();

    
   
    return (
        < >
            <Link to={'/Cart'}>
                <span className="span-carrito">
                    {getTotalProd()}
                </span>
                <img src={carrito} />    
            </Link> 
        </>
    );
}

export default CardWidjet;

