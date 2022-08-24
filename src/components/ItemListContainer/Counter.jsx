import React from 'react';
import useCounter from '../Hooks/useCounter'



const Counter = ({stock, onAdd}) => {
const {add, substract, reset, count} = useCounter(stock);
    return (
        <div>
            <div>
                <div className='divInfoCounter'>
                    <h1>Counter</h1>
                    <p>Stock : {stock}</p>
                    <p>Cantidad: {count}</p>
                </div>
                

                <div className='divBtn'>
                    <button className='btn btn-success' onClick={add}>+</button>
                    <button className='btn btn-primary' onClick={reset}>Reset</button>
                    <button className='btn btn-danger' onClick={substract}>-</button>
                </div>
                <div className='divBtnConfirmar'>
                    <button className='btn btn-primary' onClick={()=> onAdd(count)}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
