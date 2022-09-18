import React from 'react';
import CartList from './CartList';
import CartResume from './CartResume';
import CartEmpty from './CartEmpty'
import { useCartContext } from '../../Context/CartContext';


const CartContainer = () => {
    const {productos} = useCartContext();

    return <>
         { productos.length <= 0 ? <CartEmpty/> :
            <>
            <CartResume/>
             <CartList/> 
             </>
         }
         </>
}

export default CartContainer;
