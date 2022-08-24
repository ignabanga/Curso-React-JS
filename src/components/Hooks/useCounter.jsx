import {useState} from 'react';

const useCounter = (stock) => {

    const [count, setCount] = useState(0);  

    function add(){
        if (count < stock) setCount(count +1)
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
