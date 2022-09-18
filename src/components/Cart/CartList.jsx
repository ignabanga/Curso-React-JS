import React from 'react';
import Cart from './Cart';
import { useCartContext } from '../../Context/CartContext';


export const CartList = () => {
    
    const { productos} = useCartContext();
    
    return (
        
            <> 
                {productos.map((producto) => (
                <Cart producto={producto} key={producto.id}/> 
            ))}
            </>
       
    );
}

export default CartList;
