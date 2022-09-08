import {useState} from 'react';

const useCounter = ({producto}) => {

    const [count, setCount] = useState(0);  

    function add(){
        if (count < producto.stock) setCount(count +1)
    }

    function substract(){
        if(count > 0) setCount(count -1)
    }

    function reset(){
        setCount(0)
    }
    return {
        add, substract, reset, count
    }
   
}

export default useCounter;
