import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../../../Hooks/useCounter'
import { useCartContext } from '../../../Context/CartContext';



const Counter = ({stock, producto}) => {

const {add, substract, reset, count} = useCounter({producto});
const {addProduct} = useCartContext();

function addToCart(producto, count) {

    if(count !== 0){
    const productoCarrito = {id:producto.id, count:count, nombre:producto.nombre, precio:producto.precio, img:producto.imagen, stock:producto.stock}
     addProduct(productoCarrito)
    }
    
}

    return ( 
            <div>
                <div className='divInfoCounter'>
                    <p>Stock : {stock} </p>
                    <p>Cantidad: {count} </p>
                </div>

                <div className='divBtn'>
                    <button className='btn btn-primary' onClick={substract}>-</button>
                    <button className='btn btn-primary' onClick={reset}>Reset</button>
                    <button className='btn btn-primary' onClick={add}>+</button>
                </div>
                <div className='divBtnConfirmar'>
               {count !== 0 ? <Link className='btn-comprar' to={'/cart'}><button className='btn btn-primary' onClick={()=> addToCart(producto, count)}>Comprar</button></Link> : <></>} 
                </div>
             </div>
    
    );
}

export default Counter;
