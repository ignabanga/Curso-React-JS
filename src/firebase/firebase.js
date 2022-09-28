import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey:process.env.REACT_APP_WEATHER_API_KEY,
    authDomain: "proyectofinalcoder-b92b0.firebaseapp.com",
    projectId: "proyectofinalcoder-b92b0",
    storageBucket: "proyectofinalcoder-b92b0.appspot.com",
    messagingSenderId: "314591617481",
    appId: "1:314591617481:web:2bab654352d45591320818"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cargarBaseDeDatos() {
    const promise = await fetch('../data/dataItem.json')
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