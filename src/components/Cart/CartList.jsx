import React,{useState,useEffect} from 'react';
import Cart from './Cart';
import { useCartContext } from '../../Context/CartContext';
import CartEmpty from './CartEmpty';

export const CartList = () => {
    
    const { productos,carritoVacio} = useCartContext();
    
    return (
        
            <> 
                {carritoVacio ? <CartEmpty/> : productos.map((producto) => (
                <Cart producto={producto} key={producto.id}/> 
            ))}
            </>
       
    );
}

export default CartList;
