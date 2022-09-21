import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC7uUlYhC9hpyaE-AbNuKOEVfOoS7xT6Zw",
    authDomain: "proyectofinalcoder-b92b0.firebaseapp.com",
    projectId: "proyectofinalcoder-b92b0",
    storageBucket: "proyectofinalcoder-b92b0.appspot.com",
    messagingSenderId: "314591617481",
    appId: "1:314591617481:web:2bab654352d45591320818"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cargarBaseDeDatos() {
    const promise = await fetch('./data/dataItem.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            imagen: producto.imagen,
            precio: producto.precio,
            stock: producto.stock,
            categoria: producto.categoria,
            info: producto.info
        });
    })
}

export {db,app,cargarBaseDeDatos}