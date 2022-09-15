import React, {createContext,useContext,useState} from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([]);


    const addProduct = (producto) =>{
        const foundProducto = productos.find((prod)=> prod.id === producto.id)
        if (foundProducto){
            if((producto.count + foundProducto.count) <= producto.stock){ 
                foundProducto.count=foundProducto.count+producto.count;
                setProductos([...productos])
            }else{
                alert("No hay mas stock")
            }
        }else{
            const auxCarrito = productos;
            auxCarrito.push(producto)
            setProductos(auxCarrito)
        }  
    }

    const addProd = (id,stock,count)=>{
        const foundProducto = productos.find((producto)=> producto.id === id)
        if (foundProducto){
            if(count < stock){ 
                foundProducto.count++;
                setProductos([...productos])
            }else{
                alert("No hay mas stock")
            }
        }
    }

    const restProd = (id,count)=>{
        const foundProducto = productos.find((producto)=> producto.id === id)
        if (foundProducto){
            if(count > 1){ 
                foundProducto.count--;
                setProductos([...productos])
            }else{
                deleteProd(id)
            }
        }
    }

    const deleteProd = (id)=>{
        const auxCarrito = productos.filter(prod => prod.id !== id)
        setProductos(auxCarrito)
    }

  
    return (
        <CartContext.Provider value ={{productos,addProduct,addProd,deleteProd,restProd}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;