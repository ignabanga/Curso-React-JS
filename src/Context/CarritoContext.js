import React, {useState,createContext} from 'react';

const CarritoContext = createContext();
const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = () =>{
        const auxCarrito = carrito
        let indice = carrito.findIndex()
        setCarrito(auxCarrito)
    }

    const quitarProductoCarrito = () =>{
        setCarrito(carrito.push(producto))
    }

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    );
}

export {DarkModeContext, DarkModeProvider};

