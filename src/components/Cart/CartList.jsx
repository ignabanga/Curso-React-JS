import React,{useState,useEffect} from 'react';
import Cart from './Cart';
import { useCartContext } from '../../Context/CartContext';
import CartEmpty from './CartEmpty';

export const CartList = () => {
    
    const { productos} = useCartContext();
    
    const [carritoVacio, setCarrito] = useState(true);
    useEffect(() => {
        if(productos.length != 0){
            setCarrito(false)
        }else{
            setCarrito(true)
        }
       
    }, []);
    return (
        
            <> 
                {carritoVacio ? <CartEmpty/> : productos.map((producto) => (
                <Cart producto={producto} key={producto.id}/> 
            ))}
            </>
       
    );
}

export default CartList;
