import React from 'react';
import './CardWidjet.css'
import carrito from '../../../img/carrito.png'
import {Link} from 'react-router-dom'

const CardWidjet = () => {
    return (
        < >
           <Link to={'/Cart'}><img src={carrito} /></Link> 
        </>
    );
}

export default CardWidjet;

