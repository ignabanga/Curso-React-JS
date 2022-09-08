import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../../../Hooks/useCounter'



const Counter = ({stock, producto}) => {

const {add, substract, reset, count} = useCounter({producto});

function addToCart(producto, count) {
    const productoCarrito = {id:producto.id, count:count}
}

    return ( 
            <div>
                <div className='divInfoCounter'>
                    <p>Stock : {stock} </p>
                    <p>Cantidad: {count} </p>
                </div>
                

                <div className='divBtn'>
                    <button className='btn btn-outline-light' onClick={add}>+</button>
                    <button className='btn btn-outline-light' onClick={reset}>Reset</button>
                    <button className='btn btn-outline-light' onClick={substract}>-</button>
                </div>
                <div className='divBtnConfirmar'>
                    <button className='btn btn-outline-light' onClick={()=> addToCart(producto, count)}><Link className='btn-comprar' to={'/cart'}>Comprar</Link></button>
                </div>
             </div>
    );
}

export default Counter;
