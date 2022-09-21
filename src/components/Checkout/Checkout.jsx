import React, { useState } from "react";
import { useCartContext } from '../../Context/CartContext';
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const { productos, getTotalPrice, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState()
    const navigate = useNavigate()

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: '',
    })

    const { Nombre, Email, Telefono } = buyer
    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clearCart()

        } catch (err) {
            console.log(err)
        }
    }

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = productos.map(e => { return { id: e.id, nombre: e.nombre, precio: e.precio, count: e.count } })
        const dia = new Date()
        const total = getTotalPrice()
        const data = { buyer, items, dia, total }
        console.log('data', data)
        generateOrder(data)
    }

    const handleClear = () => {
        clearCart()
        navigate('/')
    }
    return (
        <>{!orderId ?
            (<div>
                <legend className="legendTitle">Ingrese datos para la compra</legend>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-group">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="Nombre"
                                className="form-control"
                                value={Nombre}
                                placeholder="Nombre"
                                id="floatingInput"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="floatingInput">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                name="Email"
                                className="form-control"
                                value={Email}
                                placeholder="name@example.com"
                                id="floatingInput1"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="floatingInput1">Email</label>
                        </div>
                        <div className="form-floating mb-3" >
                            <input
                                type="text"
                                name="Telefono"
                                className="form-control"
                                value={Telefono}
                                placeholder="Telefono"
                                id="floatingInput2"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="floatingInput2">Numero de telefono</label>
                        </div>
                        <div className="btnCardEnd">
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-primary"
                        />
                        <button className="btn btn-primary" onClick={handleClear}>
                            Cancelar Compra
                        </button>
                        </div>
                    </div>
                </form>
            </div>)
            :
            <div class="card border-success mb-3">
            <div class="card-body">
                <h4 class="card-title">Compra realizada con exito!</h4>
                <p class="card-text"><strong>Gracias por comprar!</strong> Su orden de compra es: {orderId}</p>
                <button className="btn btn-primary" onClick={handleClear}>
                            Volver al inicio
                        </button>
                </div>
                </div>
        }
        </>
    )
}

export default Checkout;
